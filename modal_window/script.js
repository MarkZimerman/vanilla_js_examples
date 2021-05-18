window.onload = function() {

    var btn1 = document.querySelector('.popup1');
    var popup1 = new PopupWindow();
    btn1.addEventListener('click', function() {popup1.show('<b>My</b> simple content');});

    var btn2 = document.querySelector('.popup2');
    var popup2 = new PopupWindow();
    btn2.addEventListener('click', function() {
        popup2.show(`
            <h2>Hello world</h2>
            <p>Quasi accusamus, in magnam architecto fugit a blanditiis obcaecati harum, vitae temporibus voluptatum doloribus iure perferendis consectetur culpa amet iusto voluptate. Eligendi?</p>
            <button class="callbackBtn">Save</button>
            <button class="cancelBtn">Cancel</button>`, 
            function() {
                console.log('outside: ', this);
                console.log('Save was clicked in modal window');
            });
    });

}

function PopupWindow() {
    
    var popupDiv = document.querySelector('.popup');
    var popupOverlay = document.querySelector('.popup__overlay');
    var popupClose = document.querySelector('.popup__window__close');
    var popupContent = document.querySelector('.popup__window__content');
    var currentPopup = this;

    popupClose.onclick = function() { currentPopup.close(); };
    popupOverlay.onclick = function() { currentPopup.close(); };

    this.show = function(htmlContent, callback) {

        popupContent.innerHTML = htmlContent || 'Error occurred...';

        if(typeof(callback) === 'undefined') {
            callback = function(){};
        }

        var popupCallbackBtn = document.querySelector('.popup__window__content .callbackBtn');
        var popupCancelBtn = document.querySelector('.popup__window__content .cancelBtn');
        
        if(popupCallbackBtn){
            popupCallbackBtn.onclick = function() {
                console.log('inside: ', this);
                callback.call(this);
                currentPopup.close();
            };
        }

        if(popupCancelBtn){
            popupCancelBtn.onclick = function() { currentPopup.close(); };
        }

        popupDiv.classList.add('active');

    }

    this.close = function() {
        popupDiv.classList.remove('active');
    }
}