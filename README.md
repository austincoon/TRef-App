# CADC Transportation Referral Map

A simple local web app for Central Arkansas Development Council to visualize whether a non-emergency transportation trip requires a referral based on county distance.

## How it works

- Click the rider's home county on the Arkansas map.
- Home county is limited to the Southwest Arkansas service counties.
- The app finds the shortest route across county borders.
- The map highlights every Arkansas county within two county borders.
- The panel on the right lists the counties that can be reached without a referral, grouped by home county, one county away, and two counties away.
- Trips to counties outside the highlighted/listed area require a referral.
- Out-of-state border counties are included as possible destinations only when crossing into that county still keeps the trip within the two-county range and the destination address is within 50 miles.
- County adjacency uses a one-mile minimum shared boundary so tiny corner or river-point contacts do not count.
- Approved exceptions are layered on top of the two-county rule and shown separately in the destination list.
- Other out-of-state trips still need manual review because they must be within 50 miles and are outside the Arkansas county-distance map.

## Configure the app

1. Open `script.js`.
2. The `serviceCounties` array already includes the home counties you service.
3. The `countyNeighbors` object contains Arkansas county border relationships.
4. The `map-data.js` file contains Arkansas county shapes plus out-of-state border county shapes used by the clickable map.
5. Save and open `index.html` in your browser.

## Service counties

Your current home counties are:

- Calhoun
- Clark
- Columbia
- Dallas
- Hempstead
- Hot Spring
- Howard
- Lafayette
- Little River
- Miller
- Montgomery
- Nevada
- Ouachita
- Pike
- Saline
- Sevier
- Union
- Garland

## Notes

- County neighbor data was derived from Arkansas GIS Office county boundary data.
- This tool is meant to support screening decisions; keep your agency's current policy as the source of truth.
