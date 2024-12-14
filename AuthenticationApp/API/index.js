<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Signal School Visitor Book</title>
    <link rel="stylesheet" href="styles.css">
    <script src="https://cdnjs.cloudflare.com/ajax/libs/crypto-js/3.1.9-1/crypto-js.js"></script>
</head>

<body>
    <div id="passwordPrompt" class="prompt">
        <h1>Enter Password</h1>
        <input type="password" id="passwordInput" placeholder="Password">
        <button onclick="checkPassword()">Submit</button>
    </div>
    <div id="content" style="display:none;">
        <h1>Welcome to Signal School Visitor Book</h1>
        <div class="filters">
            <label for="centerSelect">Center of Excellence:</label>
            <select id="centerSelect">
                <option value="">--Select Center--</option>
                <option value="USAACE">USAACE</option>
                <option value="CCoE">CCoE</option>
                <option value="FCoE">FCoE</option>
                <option value="USAICoE">USAICoE</option>
                <option value="MCoE">MCoE</option>
                <option value="MSCoE">MSCoE</option>
                <option value="MEDCoE">MEDCoE</option>
                <option value="MCCoE">MCCoE</option>
                <option value="NCOLCoE">NCOLCoE</option>
                <option value="SCoE">SCoE</option>
            </select>
            <div class="search-container">
                <input type="text" id="searchInput" placeholder="Search for items...">
                <button id="clearSearch" onclick="clearSearch()">X</button>
            </div>
        </div>
        <table id="blobTable">
            <thead>
                <tr>
                    <th>Item Name</th>
                    <th>Link</th>
                </tr>
            </thead>
            <tbody>
                <!-- Table rows will be inserted here by JavaScript -->
            </tbody>
        </table>
        <div id="pagination"></div>
    </div>
    <script src="script.js"></script>
    <script src="password.js"></script>
</body>

</html>