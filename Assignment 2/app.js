// app.js
var app = angular.module('personalWebpageApp', []);

app.controller('MainController', function($scope) {
    $scope.personalInfo = {
        name: 'Nabajeet Kashyap',
        tagline: 'I am a 2nd year student of Assam Down Town Univerty.',
        about: 'I am a NCC cadet from 2nd year. I went for AIVSC24, I know how to build a tent. I have keen interest in Web Developmet. ',
        hobbies: ['Reading', 'Coding', 'Traveling', 'Photography'],
        nativePlace: 'I hail from Tezpur, Assam',
        familyMembers: ['Father: Jadab Goswami', 
            'Mother: Mun Mun Goswami', 
            'Sibling: Jigyass(Brother)'
        ],
        education: [
            'School: Army Public School, Tezpur, 2021',
            'University: Assam Down Town University, 2026'
        ],
        certificates: [
            'Certificate in Web Development, 2024',
            'Certificate in Database, 2024',
            'Community Service Recognition, 2024'
        ],
        contributions: 'As i a NCC cadet i have been to many community development drives like Swaccha Bharat, Har Ghar Tiranga Campaign, Blood Donation, etc.'
    };
});
