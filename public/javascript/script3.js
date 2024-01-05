document.getElementById('question1-box').addEventListener('toggle', function() {
    this.classList.toggle('details-open', this.open);
    this.classList.toggle('details-closed', !this.open);
});