const clickUpgradeBox = function() {

	gmodal = $("#generic-upgrade-modal");
    let basicplanbox;
    let standardplanbox;
    let premiumplanbox;

    let mypriority = document.querySelector("#priority").value;
    let cheapestupgradableplan = mypriority+1;

    gmodal.find("[data-upgrade-box]").each(function(){
        plan = $(this).data("upgrade-box");

        if(plan == 1) {
            basicplanbox = $(this);
        } else if(plan == 2)
        {
            standardplanbox = $(this);
        } else if(plan == 3)
        {
            premiumplanbox = $(this);
        }
    });

}


$(".upgrade-btn-navbar").on("click", () => {
	gmodal = $("#generic-upgrade-modal");
	gmodal.toggleClass('out');
    $(".generic-upgrade-modal-plan-name").text(`bigger plan`);
    $(".upgrade_to_plan_name_class").text(`bigger plan`);
    $(".upgrade-to-plan-text").text(`Choose a bigger plan below to upgrade to.`);
    $(".upgrade-modal-headline").text("Upgrade Below!");

    if(mypriority != 3) {
        if(cheapestupgradableplan == 1) {
            basicplanbox.click();
        } else if(cheapestupgradableplan == 2) {
            standardplanbox.click();
        } else if(cheapestupgradableplan == 3) {
            premiumplanbox.click();
        }
    }

	clickUpgradeBox();

})

function abbreviateNumber(number){

    var SI_SYMBOL = ["", "k", "M", "G", "T", "P", "E"];
    // what tier? (determines SI symbol)
    var tier = Math.log10(Math.abs(number)) / 3 | 0;

    // if zero, we don't need a suffix
    if(tier == 0) return number;

    // get suffix and determine scale
    var suffix = SI_SYMBOL[tier];
    var scale = Math.pow(10, tier * 3);

    // scale the number
    var scaled = number / scale;

    // format number and add suffix
    return scaled.toFixed(1) + suffix;
}
