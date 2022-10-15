document.addEventListener('DOMContentLoaded', function () {
    var modal = document.getElementById('confirmModal');
    var delBtn = document.getElementById('btnSubmit');
    var confirmActionForm = document.getElementById('confirmActionForm');
    modal.addEventListener('show.bs.modal', function (event) {
        var button = event.relatedTarget;
        document.getElementById('confirmModalLabel').innerHTML = button.getAttribute('data-bs-title');
        document.getElementById('confirmModalMessage').innerHTML = button.getAttribute('data-bs-message');
        confirmActionForm.action = button.getAttribute('data-bs-url');
    });
    delBtn.onclick = function () {
        alert('Are you sure?');
        confirmActionForm.submit();
    }
});