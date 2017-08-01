'use strict'

simpleForum.controller('topicsController', function($scope) {
            $scope.topics = [
                {
                    "icon": "../app/assets/img/ic_android_black_24dp_2x.png",
                    "topic": "Android is awesome",
                    "description": "Just switched from iOs and cannot be happier",
                    "author": "Vovan",
                    "replies": 1023,
                    "views": 11
                },
                {
                    "icon": "../app/assets/img/ic_accessibility_black_24dp_2x.png",
                    "topic": "Buy, Buy, birdie",
                    "description": "Spent 5 years fighting this @#$!#$! Enough for me! I'm moving to countryside to grow cabbage",
                    "author": "Chiko",
                    "replies": 34,
                    "views": 3
                },
                {
                    "icon": "../app/assets/img/ic_picture_as_pdf_black_24dp_2x.png",
                    "topic": "Best book to start?",
                    "description": "",
                    "author": "4unCoder",
                    "replies": 65,
                    "views": 54
                },
                {
                    "icon": "../app/assets/img/ic_help_outline_black_24dp_2x.png",
                    "topic": "Stupid question #1",
                    "description": "I can ask more stupid questions",
                    "author": "Gogi",
                    "replies": 32,
                    "views": 345
                },
                {
                    "icon": "../app/assets/img/ic_important_devices_black_24dp_2x.png",
                    "topic": "Checkout my app",
                    "description": "Just finished my first app and published in a Google Store. Please try and let me know ONLY if you like it.",
                    "author": "Magogi",
                    "replies": 27,
                    "views": 68
                },
                {
                    "icon": "../app/assets/img/ic_cloud_upload_black_24dp_2x.png",
                    "topic": "Google Drive integration anyone?",
                    "description": "What API to use?",
                    "author": "Kent",
                    "replies": 789,
                    "views": 2
                }
            ];
        });