document.addEventListener('DOMContentLoaded', function () {
    const jsonData = {
        "1": {
            "application": "my app",
            "contacts": null,
            "servicenow": null
        },
        "2": {
            "application": "my app",
            "contacts": {
                "it-owner": "owner",
                "key-expert": [
                    "user1",
                    "user2"
                ],
                "hosted-env": "cloud",
                "accessibility": "internet"
            },
            "servicenow": {
                "business-service-name": "gh support"
            }
        }
        // Add more data as needed
    };

    const tableBody = document.getElementById('data-output');

    // Function to populate the table with JSON data
    function populateTable() {
        for (const key in jsonData) {
            const rowData = jsonData[key];
            const row = document.createElement('tr');

            // Add table cells
            for (const property in rowData) {
                const cell = document.createElement('td');
                if (property === 'contacts' || property === 'servicenow') {
                    // Handle nested objects
                    for (const nestedProperty in rowData[property]) {
                        const nestedCellValue = Array.isArray(rowData[property][nestedProperty])
                            ? rowData[property][nestedProperty].join(', ')
                            : rowData[property][nestedProperty];
                        cell.appendChild(document.createTextNode(nestedCellValue));
                        row.appendChild(cell);
                    }
                } else {
                    // Handle non-nested properties
                    cell.appendChild(document.createTextNode(rowData[property]));
                    row.appendChild(cell);
                }
            }

            // Append the row to the table body
            tableBody.appendChild(row);
        }
    }

    // Call the function to populate the table
    populateTable();
});

