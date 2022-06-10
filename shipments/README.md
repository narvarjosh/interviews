At Narvar, we handle data coming from many sources and stitch it together to present a cohesive view to end users. One example is the shipments block of our Track pages. We have one API for getting tracking data related to a tracking number, which is sourced from specific carrier APIs. We have another API for getting order data (including what shipments are in an order, what items are in an order, what items belong to each shipment, etc), which is sourced from retailers pushing that data from their systems to our systems.



Write a program that can take in tracking data and order data, and render out a list of shipments. Each shipment should show the `status` for that shipment, as well as a list of items in that shipment. Each item block should show the `image`, `quantity`, and `name` of the item. Don't worry about styling.



The formats of the two data structures are as follows:



Order data

OrderData {
  items: Item[];
  shipments: Shipment[];
}
  
Item {
  id: string;
  image: string;
  name: string;
}

Shipment {
  trackingNumber: string;
  items: ShipmentItem[]
}

ShipmentItem {
  quantity: number;
  id: string; // Matches Item.id
}


Tracking data

TrackingData {
  trackingNumber: string; // Matches Shipment.trackingNumber
  status: string;
  edd: Date;
}


Bonus Tasks

Sometimes the number of items to show within a shipment are too many to display and remain conducive to a positive user experience. Update the program so that, for each shipment that has more than 3 items to show, render out a text above the items saying "{{total # of items}} including:", and only render out 3 item blocks.
Sort the shipments according to the Estimated Delivery Date (`edd`) from soonest to latest, with "Delivered" shipments showing at the end of the shipments.