odoo.define('sale.tour_sale_signature', function (require) {
'use strict';

var tour = require('web_tour.tour');
var base = require('web_editor.base');

// This tour relies on data created on the Python test.
tour.register('sale_signature', {
    test: true,
    url: '/my/quotes',
    wait_for: base.ready(),
},
[
    {
        content: "open the test SO",
        trigger: 'a:containsExact("test SO")',
    },
    {
        content: "click sign",
        trigger: 'a:contains("Sign")',
    },
    {
        content: "click Auto",
        trigger: '.o_portal_sign_auto_button',
    },
    {
        content: "click select style",
        trigger: '.o_portal_sign_auto_select_style a',
    },
    {
        content: "click style 4",
        trigger: '.o_portal_sign_auto_font_selection a:eq(3)',
    },
    {
        content: "click submit",
        trigger: '.o_portal_sign_submit',
    },
    {
        content: "check it's confirmed",
        trigger: '#quote_content:contains("Thank You")',
    },
]);
});
