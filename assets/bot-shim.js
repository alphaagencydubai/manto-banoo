/* Alpha preview bot. preview-shim.js (from alphawebsite.ir) answers the site's server calls in the browser, but it
   also stops every form from submitting (for the store's panel pages). On a client preview that blocks the bag's
   «ثبت سفارش». The shim lets forms with method="dialog" through, and every form in the bag lives in a <dialog>:
   mark them so (window capture runs before the shim's document capture). site.js prevents the default itself. */
(function () {
  window.addEventListener('submit', function (e) {
    var f = e.target;
    if (f && f.closest && f.closest('dialog')) f.setAttribute('method', 'dialog');
  }, true);
})();
