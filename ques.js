let person = [
    {
        'firstName': 'Zakir',
        'lastName': 'Ahmed',
        'Office-Address': 'Delhi'
    },
    {
        'firstName': 'Vimlesh',
        'lastName': 'Pandey',
        'Office-Address': 'Bhilwara'
    },
    {
        'firstName': 'Abhijeet',
        'lastName': 'Agrawal',
        'Office-Address': 'Jammu'
    }
]
for(let i=0;i<person.length;i++){
    let val=person[i];
    console.log(i+1);
for (let key in val) {
    console.log("|-"+key + " " + val[key]);
}

}
