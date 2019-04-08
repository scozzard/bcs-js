# BCS: Javascript Test

## What was required

Place a grid in the div (id:grid) which is populated from the data in the json object `BCS`. In the grid, display only those records with an account number beginning with ‘B’ and sorted by account number.

The numeric values in the form need to be formatted as `0.00` and date values as `11 January 2017`. Items in the value field which are less than 100 should have a red background, items with a value greater than 500 should have a green background.

Any online tools and javascript frameworks can be used.

```

<head>                       
    <script>
        BCS = {data: '[{ "id": 1, "name": "Bob", "account": "ACC123", "value": 500, "created": "2017-01-11" },{ "id": 2,"name": "Alice", "account": "BBB321", "value": 300, "created": "2017-03-05"},{"id": 3, "name": "Jim", "account": "BAA456","value": 20.5, "created": "2017-02-12"}, { "id": 4, "name": "Liz", "account": "BBB654", "value": 1000, "created": "2017-04-30" }]'}
    </script>
</head>
    <body>
        <p>
            Please see table below:
        </p>
        <div id="grid">
        </div>
    </body>
</html>

```

## My Solution

### Setup: Option 1 (the full sha-bang)

To view this test in completion, please start by having Node, npm and bower installed. If you do not have these components installed, you may do so by performing the following actions:

(1) Install Node using an installer here -> https://nodejs.org/en/download/.

(2) In the root directory of this repository, run `install npm`.

(3) In the root directory of this repository, run `install bower`.

(4) In the root directory of this repository, run `bower install` (to install the dependencies).

Once you have performed these actions, the js dependencies should have been added. Now you can view the test web page by opening the index.html file in your browser.

### Setup: option 2 (the easy way)

If you're not keen on going through all installs, you can download a "ready-to-go" version here -> https://drive.google.com/drive/folders/1eCWFH4oAgpKv50AXbLHWKJ_fPMgb85E2.
