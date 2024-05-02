function showContent(tabId) {
    // Hide all tab contents
    var tabContents = document.getElementsByClassName('tab-content');
    for (var i = 0; i < tabContents.length; i++) {
      tabContents[i].classList.remove('active');
    }

    // Show the selected tab content
    document.getElementById(tabId).classList.add('active');
  }