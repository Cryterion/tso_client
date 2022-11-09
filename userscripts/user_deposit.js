// ========== GUILD COMMAND
var _exudDepositVieweLang = {
	'en-uk': {
		'TimeDepEnd': 'Time Dep/Cycle',
		'BuffEnd': 'Buff End',
		'Buff': 'Buff',
		"Note": "*The exhaustion time is indicative, and may vary depending on the current cycle status and any buildings that can be added after having exhausted neighboring deposits."
		},
		"pt-br" : {
		'TimeDepEnd': 'Esgota em/Ciclo',
		'BuffEnd': 'Fim Cat.',
		'Buff': 'Catalizador',
		"Note" :  "*O tempo de esgotamento é indicativo, pode variar dependendo do estado do ciclo atual e de eventuais predios que podem intervir apos ter esgotado os depositos vizinhos."
		}
};
extendBaseLang(_exudDepositVieweLang, 'exudDepositVieweLang');

addToolsMenuItem(loca.GetText("LAB", "Trait_LovelyGeologist"), _exudDepositViewerMenuHandler);

const _exudDepositViewerAssetsNames = [ "Corn",  "Fish",	"IronOre",	"Coal",	"Stone",
					"Marble", "Granite", "Meat", "BronzeOre", "GoldOre", "TitaniumOre", "Salpeter", "Water" ,
					"HalloweenResource"
					];

var _exudDepositViewerModalInitialized = false;

function _exudDepositViewerMenuHandler(event) {
	//_debugClassesDebugMessage("_exudDepositViewerMenuHandler");
	//_debugClassesDebugMessage("_exudDepositViewerModalVersion : " + _exudDepositViewerModalVersion);
	//_debugClassesDebugMessage("_exudDepositViewerModalInitialized : " + _exudDepositViewerModalInitialized);
	$("div[role='dialog']:not(#DepositViewerModal):visible").modal("hide");
	if(!_exudDepositViewerModalInitialized)
		$('#DepositViewerModal').remove();
try{
	if($('#DepositViewerModal .modal-header .container-fluid').length == 0){
		const selectOptions = [ "---", "DepositDepleted"]; // remove All because too heavy
		//_debugClassesDebugMessage("_exudDepositViewerMenuHandler creating");

		createModalWindow('DepositViewerModal', 'Deposit Viewer');
		select = $('<select>', { id: 'udDepositViewerType' });	

		_exudDepositViewerAssetsNames.forEach(function(item) {
			select.append($('<option>', { value: item }).text(loca.GetText("RES", item))).prop("outerHTML");
		});
		$('#DepositViewerModal .modal-header').html('<div class="container-fluid"><div><span>'
			+ getImageTag('buff_transmutation_reagent.png', '45px')+' '
			+select.prop("outerHTML")
			+ '</span>  <span>'+loca.GetText("SHG", "Deposits")
			+' : <span id="dvDepositViewerTotal"></span></span></div><br/>' 
			+createTableRow([
				[4, loca.GetText("LAB", "Name")],
				[2, getText('TimeDepEnd', 'exudDepositVieweLang')],
				[2, getText('BuffEnd', 'exudDepositVieweLang') ],
				[3, loca.GetText("LAB", "amount") + "/" + getText('Buff', 'exudDepositVieweLang')],
				[1, loca.GetText("LAB", "Visit")]
			], true) 
			+ '<span style="font-size:12px">'  + getText('Note', 'exudDepositVieweLang') + '</span>'
			+ '</div>'
			);	
				

		$('#DepositViewerModalData').html('<div class="container-fluid">{0}</div>'.format(_exudDepositViewerMakeModal()));
		var my_options = $("#udDepositViewerType option");
		my_options.sort(function(a,b) {
				if (a.text > b.text) return 1;
				if (a.text < b.text) return -1;
				return 0;
				});
		$("#udDepositViewerType").empty();
		
		selectOptions.forEach(function(item) {
			$("#udDepositViewerType").append($('<option>', { value: item }).text((item == "---" ? "---" : (item == "All" ? loca.GetText("LAB", "All") : loca.GetText("MEL", item)))).prop("outerHTML"));
		});	
		$("#udDepositViewerType").append( my_options );
		$("#udDepositViewerType").prop("selectedIndex", 0);
		$('#udDepositViewerType').change(function() {_exudDepositViewerGetData();});	
		_exudDepositViewerModalInitialized = true;
	}
	else
		_exudDepositViewerGetData();
		//_debugClassesDebugMessage("_exudDepositViewerMenuHandler exiting");

}
catch (edep) {}
	
	$('#DepositViewerModal:not(:visible)').modal({ backdrop: "static" });
}

function _exudDepositViewerMakeModal() {
	var out = '';	
	out += '<div id="dvDepositViewerResult"></div>';
	return out;
}

var _exudDepositViewerGetingData = false;
function _exudDepositViewerGetData() {
	//_debugClassesDebugMessage("_exudDepositViewer get data");

var OptionSelected = $('#udDepositViewerType option:selected').val();
	if (_exudDepositViewerGetingData) return;

try{
	var gEconomics = swmmo.getDefinitionByName("ServerState::gEconomics");

	_exudDepositViewerGetingData = true;
	$('#dvDepositViewerResult').html("");
	if (OptionSelected == "---") 
	{
		_exudDepositViewerGetingData = false;
		return;
	}
	
	var out = '';		
	var tot = 0;
	
	var Deposits = swmmo.application.mGameInterface.mCurrentPlayerZone.mStreetDataMap.mDepositContainer;
	if (OptionSelected == "All")
	{
		var sDep = new Array();
		Deposits.forEach(function(item) { sDep.push(item);});
		
		Deposits = sDep;
		Deposits.sort(function(a,b) {
			return loca.GetText("RES", a.GetName_string()).localeCompare(loca.GetText("RES", b.GetName_string()));
			});
	}

	var DepositsData = new Array();
	if (OptionSelected != "DepositDepleted")
	{
		var dt_ot = new window.runtime.flash.globalization.DateTimeFormatter("en-US"); 
		dt_ot.setDateTimePattern("dd HH:mm:ss"); 

		Deposits.forEach(function(item) {
			try {			
				var BuildingsData = new Array();
				if (item == null ||  (OptionSelected != "All" && item.GetName_string() != OptionSelected)) { return; }
				var gid1 = item.GetGrid();
				var IconMapDep = getImageTag("accuracy.png", '24px', '24px').replace('<img','<img id="exudDVPOS_'+ gid1+'"').replace('style="', 'style="cursor: pointer;')
				var TotRes = item.GetAmount();
				
				var BldDep = _exudDepositViewerFindMyBuildings(gid1);
				var ResourcesRemovedEverySecond = 0;
				BldDep.forEach(function (bld) {
					try {
						var IconMapBld = "";
						var bldGid = bld.GetGrid();
						if (bldGid > 0 && bldGid != gid1)
							IconMapBld = getImageTag("accuracy.png", '24px', '24px').replace('<img','<img id="exudDVPOS_'+ bldGid+'"').replace('style="', 'style="cursor: pointer;')
						timeEnd = 0;
						timeStr = "";
						buffName = "";
						buff = bld.productionBuff;
						isWorking = bld.IsProductionActive();
						if (buff != null)
						{
							app = buff.GetApplicanceMode();	
							if (buff.IsActive(swmmo.application.mGameInterface.GetClientTime()))
							{									
								timeEnd =  new window.runtime.Date(Date.now() + (buff.GetStartTime() + buff.GetBuffDefinition().getDuration(app)) - swmmo.application.mGameInterface.GetClientTime());
								buffName = loca.GetText("RES", buff.GetBuffDefinition().GetName_string());
							}							
						}
						
						if (timeEnd > 0)
						{
							var dtfex = new window.runtime.flash.globalization.DateTimeFormatter("en-US"); 
							dtfex.setDateTimePattern("MM-dd-yyyy HH:mm"); 
							timeStr = dtfex.format(new window.runtime.Date(timeEnd));
							
						}
						var rcd = gEconomics.GetResourcesCreationDefinitionForBuilding(bld.GetBuildingName_string());

						var rcd_pck = 0; // infinite mines remove 0
						if (rcd != null)
							rcd_pck = rcd.amountRemoved; // resources removed base value
						var Seconds = bld.CalculateWays()/1000;
						var TotRemoved = bld.GetResourceInputFactor() * rcd_pck; // resources removed base * level * buffs
						
						ResourcesRemovedEverySecond += (TotRemoved == 0 ? 0 : TotRemoved / Seconds);
						BuildingsData.push({
								"Name" : loca.GetText("BUI", bld.GetBuildingName_string()),
								"Buffed" : (bld.mBuffs_vector.length > 0),
								"BuffTime": timeStr,
								"BuffName": buffName,
								"OverallTime" : Seconds, // total seconds
								"IconMap":  IconMapBld,
								"Working": isWorking,
								"GridPos" : bldGid,
								"AmountRemoved" : TotRemoved 
						});

					}
					catch (ex) {
						//alert(ex.message);
					}
				});
				DepositsData.push({
					"Name" : loca.GetText("RES", item.GetName_string()),
					"TotRes" : TotRes,
					"IconMap" : IconMapDep,
					"GridPos" : gid1,
					"BData" : BuildingsData,
					"SecondsToDeplete" : (ResourcesRemovedEverySecond > 0 && TotRes > 0 ? (TotRes / ResourcesRemovedEverySecond) : 0)
				});

				++tot;
			}
			catch (e) {
				//alert ("e :" + e.message);
			}			
		});		

		// End data get start rendering
		DepositsData.forEach(function(item) {
			try{
			
				$('#dvDepositViewerResult').append(
					createTableRow([
						[4, item.Name],
						[4, _exudDepositViewerSetTimeStr(item.SecondsToDeplete, 2)],
						[3, item.TotRes],
						[1, item.IconMap]
					], false) 
				);		
				if (item.IconMap != "")			
					document.getElementById("exudDVPOS_" + item.GridPos).addEventListener("click",function() {_exudDepositViewerGoTo(item.GridPos);});

				item.BData.forEach(function(bld) {

					$('#dvDepositViewerResult').append(
						createTableRow([
							[4, "&nbsp;&nbsp;&rarr;"+(bld.Working ? bld.Name : '<div style="color: red;">' + bld.Name + '</div>')],
							[2, _exudDepositViewerSetTimeStr(bld.OverallTime, 1) + "(" + bld.AmountRemoved + ")"],
							[2, bld.BuffTime],
							[3, bld.BuffName],
							[1, bld.IconMap]
						], false) 
					);
					if (bld.IconMap != "")
						document.getElementById("exudDVPOS_" + bld.GridPos).addEventListener("click",function() {_exudDepositViewerGoTo(bld.GridPos);});
				}); // end buildingdata foreach
			}
			catch (eren) {
			//	alert("eren: " + eren.message);
			}
		}); // end depositdata foreach		
	}
	
	var Depleted = new Array();
	swmmo.application.mGameInterface.mCurrentPlayerZone.mStreetDataMap.mBuildingContainer.forEach(function(item) {
		try {			
			if (swmmo.application.mGameInterface.mCurrentPlayerZone.mStreetDataMap.IsADepletedDeposit(item)) {
				if(item == null ||   ((OptionSelected != "DepositDepleted") && (OptionSelected != "All") && (item.GetBuildingName_string().indexOf(OptionSelected))) < 0) { return; }
				Depleted.push( { "Item" : item , "Resource" : _exudDepositViewerFindOriginalResource(item.GetBuildingName_string()) } );	
			}
		} catch (edep) {}
		});

	Depleted.sort(function(a,b) {
		return a.Resource.localeCompare(b.Resource);
		});
		
	Depleted.forEach(function(i) {
		try {
			var gid1 = i.Item.GetGrid();
			var IconMap = "";
			if (gid1 > 0)
				IconMap = getImageTag("accuracy.png", '24px', '24px').replace('<img','<img id="exudDVPOS_'+ gid1+'"').replace('style="', 'style="cursor: pointer;')
			$('#dvDepositViewerResult').append(
				createTableRow([
						[11,  loca.GetText("BUI", i.Item.GetBuildingName_string()) + (i.Resource == "" ? "" : " (" + i.Resource + ")" )],
						[1, IconMap]
					], false) 
			);
			if (IconMap != "")
				document.getElementById("exudDVPOS_" + gid1).addEventListener("click",function() {_exudDepositViewerGoTo(gid1);});
			++tot;
		}
		catch (e) {
			
		}			
	});

	
	$('#dvDepositViewerTotal').text(tot);	
}
catch (egd) {
}
_exudDepositViewerGetingData = false;	
}

// type : 1 = 00:00:00   2 = MM-dd-yyyy 00:00:00
function _exudDepositViewerSetTimeStr(seconds, type) 
{
	try {
		if (seconds < 1) return "";
		switch(type)
		{
			case 1:
				return result = new Date(seconds * 1000).toISOString().slice(11, 19);
			case 2:
				var d =  result = new Date(new Date(Date.now()).getTime() + seconds*1000);
				return (d.getMonth()+1) + "-" + d.getDate() + "-" + d.getFullYear() + " " + d.toLocaleTimeString();
		}
	}
	catch(e){
		//alert("Derr: " + e.mssage);
	}
	return "";
}


function _exudDepositViewerFindMyBuildings(gidPos)
{
	var BuildingsDep = new Array();
	swmmo.application.mGameInterface.mCurrentPlayerZone.mStreetDataMap.mBuildingContainer.forEach(function(item) {
		try {
			// cResourceCreation 
			if (item.GetResourceCreation().GetDepositBuildingGridPos() > 0)
				if (item.GetResourceCreation().GetDepositBuildingGridPos() == gidPos)
				{
					//_debugClassesDebugMessage("Push : " + item.GetBuildingName_string() + " = " + gidPos);
					BuildingsDep.push(item);
				}
		}
		catch (eee) {}
	});	
	
	return BuildingsDep;
}

function _exudDepositViewerFindOriginalResource(building_name)
{
	var res = "";
	try{
	_exudDepositViewerAssetsNames.forEach(function(item) {
			if (building_name.indexOf(item) >= 0)
				res = item;
	});
	if (res != "") res = loca.GetText("RES", res);
	}
	catch (e) {
	}
	return res;
}

function _exudDepositViewerGoTo(g)
{
	try{
	$('#DepositViewerModal').modal('hide');
	swmmo.application.mGameInterface.mCurrentPlayerZone.ScrollToGrid(g);
	//_debugClassesDebugMessage("_exudDepositViewer go and hide");

	}
	catch (e) {
		alert(e.message);
	}
}