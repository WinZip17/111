let xml = `<?xml version="1.0" encoding="UTF-8"?>
<root>
    <B>3</B>
    <C>2</C>
</root>`;

let nnn = new DOMParser().parseFromString(xml, "application/xml");