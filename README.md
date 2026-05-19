# CADC Transportation Referral Map

A simple local web app for Central Arkansas Development Council to visualize whether a non-emergency transportation trip requires a referral.

## How it works

- Click the client's home county on the Arkansas map.
- Home county is limited to Region E.
- The map highlights every Arkansas county within two county borders.
- The panel on the right lists the counties that can be reached without a referral, grouped by home county, one county away, and two counties away.
- Trips to counties outside the highlighted/listed area require a referral.
- Out-of-state border counties are included as possible destinations only when crossing into that county still keeps the trip within the two-county range and the destination address is within 50 miles.
- Approved exceptions are layered on top of the two-county rule and shown separately in the destination list.
- Other out-of-state trips still need manual review because they must be within 50 miles and are outside the Arkansas county-distance map.

## Service counties

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

