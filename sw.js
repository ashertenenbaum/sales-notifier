self.addEventListener('push', function(event) {
    // Generate the random money amount locally
    const amount = (Math.random() * (50 - 1) + 1).toFixed(2);
    
    const options = {
        body: `You received a payment of ${amount} NZD from a customer.`,
        icon: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQGluJhW7I1NYU7jF77E-9K9I46_ib_DUNHw&s',
        badge: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQGluJhW7I1NYU7jF77E-9K9I46_ib_DUNHw&s'
    };

    // '\u200b' is an invisible, zero-width space character!
    event.waitUntil(
        self.registration.showNotification('You have been paid!', options)
    );
});

self.addEventListener('install', function(event) {
    self.skipWaiting();
});

self.addEventListener('activate', function(event) {
    event.waitUntil(self.clients.claim());
});
