﻿window.ShowToastr = (type, message) => {
    if (type === 'success') {
        toastr.success(message, 'Operation Successful');
    }
    if (type === 'error') {
        toastr.error(message, 'Operation failed!');
    }
}



window.ShowSwal = (type, message) => {
    if (type === "success") {
        Swal.fire(
            'Success Notification!',
            message,
            'success'
        )
    }
    if (type === "error") {
        Swal.fire(
            'Error Notification!',
            message,
            'error'
        )
    }
}