let push = (function () {

  const render = (titulo, mensagem) => {
    if (titulo && mensagem) {
          let title = titulo;
          let options = {
            icon: 'images/icon.png',
            body: mensagem
          };

          if ('Notification' in window) {
            Notification.requestPermission();

            if ('showNotification' in ServiceWorkerRegistration.prototype) {
              console.log('Notification SW');
              navigator.serviceWorker.ready.then(function (registration) {
                registration.showNotification(title, options);
              });
            } else {
              console.log('Notification classic');
              new Notification(title, options);
            }
          }
          return false
        }
  }


  return {
    render: render
  }

})();
