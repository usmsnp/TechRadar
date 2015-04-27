module slide { export var html = '<div class="slide">    <!-- <h1 class="center">{{vm.title}}</h1>    <h2 class="center">{{vm.subTitle}}</h2> -->    <style>    .content-list{      list-style:none;      position:absolute;      left:-75px;    }    .content-preview{      background:gray;      cursor:pointer;      width: 100px;      height: 100px;      border-color: black;      border-width: 2px;      border-style: solid;      margin-bottom: 20px;    }    .selected-content    {      border-width:5px;      border-color: blue;    }    .image-preview{      width:100%;      height:100%;    }    </style>    <ul class="content-list" >      <li data-ng-repeat="c in vm.technology.content">        <div ng-switch="c.contentType" class="content-preview" ng-class="{\'selected-content\' : c.isSelected}" data-ng-click="vm.selectPage(c.id)">        <div ng-switch-when="text">          <span>{{c.id}}</span>        </div>        <div ng-switch-when="youtube">          <img src="http://img.youtube.com/vi/{{c.content}}/0.jpg" class="image-preview" alt="{{vm.title}}" />          <!-- <object data="{{c.content}}?autoplay=1" width="100%" height="100%"></object> -->        </div>        <div ng-switch-when="image">          <img src="{{c.content}}" class="image-preview" alt="{{vm.title}}" />          <span>{{c.id}}</span>        </div>      </div>      </li>  </ul>      <!-- <ul class="content-list" >        <li data-ng-repeat="c in vm.technology.content">          <div ng-switch="c.contentType">          <div ng-switch-when="text">            <span>{{c.content}}</span>          </div>          <div ng-switch-when="youtube">            <object data="{{c.content}}?autoplay=1" width="100%" height="100%"></object>          </div>          <div ng-switch-when="image">            <img src="{{c.content}}" alt="{{vm.title}}" />          </div>        </div>        </li>    </ul> -->    </ul>    <p>        {{vm.text}}    </p>    <!-- <div class="col-md-12">        <img data-ng-if="vm.media" class="img-responsive" data-ng-src="{{vm.media}}" alt="{{vm.title}}" />    </div> --></div>'; }