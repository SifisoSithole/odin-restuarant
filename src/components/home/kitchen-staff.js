import '../../styles/kitchen-staff.css';

function createKitchenStaff(){
    const staffImageDiv = document.createElement('div');
    const heroImage = document.createElement('div');
    const staffMembers = [
        {
            name: 'Marcus <b>Cole</b>',
            position: 'GRILL CHEF',
            text: 'Aenean commodo ligula eget dolor. Aenean massa. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.'
        },
        {
            name: 'Lisa <b>Cole</b>',
            position: 'EXECUTIVE CHEF',
            text: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.'
        },
        {
            name: 'Lara <b>Langford</b>',
            position: 'CHEF DE CUISINE',
            text: 'Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed fringilla mauris.'
        },
        {
            name: 'Alex <b>Deer</b>',
            position: 'SOUS CHEF',
            text: 'Phasellus ullamcorper ipsum rutrum nunc. Nunc nonummy metus. Vestibulum volutpat pretium libero. Cras id dui.'
        }
    ]

    heroImage.id = 'hero-image';
    staffImageDiv.appendChild(heroImage);

    const heading = document.createElement('p');
    heading.innerHTML = 'KITCHEN <b>STAFF<b>';
    heroImage.appendChild(heading);

    const text = document.createElement('p');
    text.innerHTML = 'Award winning meals, delivered by an amazing team';
    heroImage.appendChild(text);

    const staff = document.createElement('div');
    
    staffMembers.forEach((person) => {
        let staffMember = document.createElement('div');
        let name = document.createElement('p');
        name.innerHTML = person.name;
        staffMember.appendChild(name);

        let position = document.createElement('p');
        position.innerHTML = person.position;
        staffMember.appendChild(position);

        let info = document.createElement('p');
        info.innerHTML = person.text;
        staffMember.appendChild(info);

        staff.appendChild(staffMember);
    });

    staff.id = 'staff-members';

    staffImageDiv.appendChild(staff);

    return staffImageDiv;
}

export default createKitchenStaff;