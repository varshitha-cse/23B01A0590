# Notification System Design

## Objective

The objective of this project is to display the top 10 unread notifications based on priority.

## Priority Order

1. Placement (Highest Priority)
2. Result
3. Event (Lowest Priority)

If two notifications have the same priority, the latest notification is displayed first.

## Approach

1. Fetch notifications from the Notification API.
2. Log the API request using the logging middleware.
3. Assign priorities:

   * Placement = 3
   * Result = 2
   * Event = 1
4. Sort notifications by:

   * Priority (descending)
   * Timestamp (latest first)
5. Display the top 10 notifications.
6. Log successful execution or errors using the logging middleware.

## Time Complexity

* Sorting: O(n log n)
* Selecting Top 10: O(10)

## Technologies Used

* JavaScript (Node.js)
* Axios
* Logging Middleware
* REST API
