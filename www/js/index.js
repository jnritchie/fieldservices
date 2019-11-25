/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
var app = {
    // Application Constructor
    initialize: function() {
        document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
    },

    // deviceready Event Handler
    //
    // Bind any cordova events here. Common events are:
    // 'pause', 'resume', etc.
    onDeviceReady: function() {
        //this.receivedEvent('deviceready');
        console.log("Device Ready");
        
        console.log(device.model);
        console.log(device.uuid);
        var model = device.model;
        var uuid = device.uuid;
        this.updatedID('deviceID', model );


    },

    updatedID: function(id, dev) {
         var parentElement = document.getElementById(id);
         var deviceid = dev;
         console.log("wii", deviceid);
         parentElement.innerHTML = deviceid;
    },

    // Update DOM on a Received Event
    receivedEvent: function(id) {
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');

        console.log('Received Event: ' + id);
    }
};

app.initialize();


var vapp = new Vue({
    el: '#app',
    data: {
        UserName: 'James Cook',
        blogs: [],
        blogimg:'',
        blogtitle: 'Refresh News',
        numberofposts: ''
    },
    mounted() {
        console.log("Hello, Mr. Ritchie");

        fetch('https://refreshbahamas.com/wp-json/wp/v2/posts?_embed',{
            "method": "GET",
        })
        .then(res => res.json())
        .then(res => {
            //console.log(res);
            this.blogs = res;
            console.log(this.blogs);
            this.numberofposts = this.blogs.length;

        });
    },
    methods: {
        checkstatus: function(){
            console.log("We need to check the users status?");
        },
    }
});


