const fetchWrapper = {
    get,
    post,
    put,
    delete: _delete
};

function get(url, requestOptions={}) {
    requestOptions["method"] = 'GET';
    return fetch(url, requestOptions).then(handleResponse);
}

function post(url, options) {
    body = options.body
    signal = options.signal
    const requestOptions = {
        method: 'POST',
        headers: body instanceof FormData ? {} : { 'Content-Type': 'application/json' },
        body: body instanceof FormData ? body : JSON.stringify(body),
        ...(signal && {signal: signal})
    };
    return fetch(url, requestOptions).then(handleResponse);
}

function put(url, body) {
    const requestOptions = {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body)
    };
    return fetch(url, requestOptions).then(handleResponse);    
}

// prefixed with underscored because delete is a reserved word in javascript
function _delete(url) {
    const requestOptions = {
        method: 'DELETE'
    };
    return fetch(url, requestOptions).then(handleResponse);
}

// helper functions

function handleResponse(response) {
    return response.text().then(text => {
        const data = text && JSON.parse(text);
        
        const result = {
            statusCode: response.status,
            data: data,
        };

        // if (!response.ok) {
        //     const error = (data && data.message) || response.statusText;
        //     Notification("error", "Error", "Something went wrong");
        //     return Promise.reject(error);
        // }

        if(data.upgrade)
        {
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

            if (data.upgrade == "standard") {
                $("#upgrade-modal").toggleClass('out');
                return Promise.reject("Needs upgrade");
            } else if(data.upgrade === "not_specified") {
                gmodal.toggleClass('out');
                $(".generic-upgrade-modal-plan-name").text(`bigger plan`);
                $(".upgrade_to_plan_name_class").text(`bigger plan`);
                $(".upgrade-to-plan-text").text(`Upgrade to a bigger plan to unlock this feature.`);
                $(".upgrade-modal-headline").text("You have reached your limit!");

                if(mypriority != 3) {
                    if(cheapestupgradableplan == 1) {
                        basicplanbox.click();
                    } else if(cheapestupgradableplan == 2) {
                        standardplanbox.click();
                    } else if(cheapestupgradableplan == 3) {
                        premiumplanbox.click();
                    }
                }
            } else if(data.upgrade === "standard_adspend") {
                gmodal.toggleClass('out');
                $(".generic-upgrade-modal-plan-name").text(`standard plan`);
                $(".upgrade_to_plan_name_class").text(`standard plan`);
                $(".upgrade-to-plan-text").text(`Upgrade to standard plan to be able to filter by adspend.`);
                $(".upgrade-modal-headline").text("Oops! You can't filter by adspend!");
                standardplanbox.click();
            } else if(data.upgrade === "standard_scaling") {
                gmodal.toggleClass('out');
                $(".generic-upgrade-modal-plan-name").text(`standard plan`);
                $(".upgrade_to_plan_name_class").text(`standard plan`);
                $(".upgrade-to-plan-text").text(`Upgrade to standard plan to be able to filter by scaling.`);
                $(".upgrade-modal-headline").text("Oops! You can't filter by scaling!");
                standardplanbox.click();
            } else if(data.upgrade === "standard_normal") {
                gmodal.toggleClass('out');
                $(".generic-upgrade-modal-plan-name").text(`standard plan`);
                $(".upgrade_to_plan_name_class").text(`standard plan`);
                $(".upgrade-to-plan-text").text(`Upgrade to a paid plan to unlock this feature.`);
                $(".upgrade-modal-headline").text("You have reached your limit!");
                standardplanbox.click();
            } else if(data.upgrade != undefined) {
                gmodal.toggleClass('out');
                $(".generic-upgrade-modal-plan-name").text(`${data.upgrade} plan`);
                $(".upgrade_to_plan_name_class").text(`${data.upgrade} plan`);
                $(".upgrade-to-plan-text").text(`Upgrade to a paid plan to unlock this feature.`);
                $(".upgrade-modal-headline").text("You have reached your limit!");

                if(data.upgrade == "basic") {
                    basicplanbox.click();
                } else if(data.upgrade == "standard") {
                    standardplanbox.click();
                } else if(data.upgrade == "premium") {
                    premiumplanbox.click();
                }
                //return Promise.reject("Needs upgrade");
            }
        }

        data.statusCode = response.status;
        return JSON.stringify(data);
    });
}