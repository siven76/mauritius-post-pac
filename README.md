# Mauritius Post - Postage Assessment Calculator (PAC)

Integrate this API into your website to enable your customers to calculate the current costs of sending letters or parcels within Mauritius and overseas.

The documentation can be viewed on SwaggerHub: [https://app.swaggerhub.com/apis/siven76/mauritius-post/](https://app.swaggerhub.com/apis/siven76/mauritius-post/)

## Getting Started

Below you'll find tutorials and reference documentation that will teach you how to use the Postage Assessment Calculation API.

### What is the Postage Assessment Calculation API?

The Postage Assessment Calculation API is used to calculate the cost of sending letters and parcels within Mauritius and overseas. Integrate the Postage Assessment Calculation API into your application to enable your customers to calculate the delivery costs for your products or services.

The Postage Assessment Calculation API offers the following services:

1.	Calculate the available postal services Mauritius Post offers to send a parcel or letter based on input parameters such as dimensions, weight and destination of the item to be sent

	- Example postal services include standard post, registered post and express post

	| **Name**               	| Description |
	| ------------------------- | ----------- |
	| Domestic parcel services  | Returns a list of the available postage services for domestic parcels based on the dimensions and origin and destination postcodes of the item to be sent |
	| International parcel services | Returns a list of the available postage services for international parcels based on the destination country and weight of the item to be sent |
	| Domestic letter services | Returns a list of the available postage services for domestic letters based on the dimensions and weight of the item to be sent |
	| International letter services | Returns a list of the available postage services for international letters based on the destination country and weight of the item to be sent |

2.	Calculate the cost of sending a parcel or letter based on input parameters such as dimensions, weight, destination and the postal service required

	- The available postal services are calculated using the functionality described in step 1 (above)

	| **Name**               	| Description |
	| ------------------------- | ----------- |
	| Calculation of postage cost for domestic parcels | Returns the cost of sending a domestic parcel based on the origin and destination postcodes, dimensions, weight and the postal service required |
	| Calculation of postage cost for international parcels | Returns the cost of sending an international parcel based on the destination country, weight, postal service required and the amount of (optional) extra cover required |
	| Calculation of postage cost for international letters | Returns the cost of sending an international letter based on the destination country, weight, postal service required and the amount of (optional) extra cover required |
	| Calculation of postage cost for international letters | Returns the cost of sending an international letter based on the destination country, weight, postal service required and the amount of (optional) extra cover required |

3.	If required, additional services are available to return complete lists of the valid parcel and letter types, sizes and weights accepted by the PAC API

	| **Name**               	| Description |
	| ------------------------- | ----------- |
	| Country | Returns a list of countries which are accepted by the API |
	| Domestic Letter Thickness | Returns a list domestic letter thickness values accepted by the API |
	| Domestic Letter Weight | Returns a list of domestic letter weight values accepted by the API |
	| Domestic Letter Envelope Size | Returns a list of available domestic envelope type values that are offered by Mauritius Post |
	| International Letter Weight | Returns a list of international letter weight values that are accepted by the API |
	| International Parcel Weight | Returns a list of international parcel weight values that are accepted by the API |
	| Domestic Parcel Weight | Returns a list of available domestic parcel weight values that are accepted by the API |
	| Domestic Parcel Type | Returns a list of available parcel type values (Boxed items or Satchels) |
	| Domestic Parcel Size | Returns a list of available parcel box size values that are offered by Mauritius Post |
