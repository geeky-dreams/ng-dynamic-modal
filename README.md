# ng-dynamic-modal
Bootstrap based custom modal component for Angular =>5 applications.


### Prerequisites
Bootstrap  >=4.1.0 


### Installation

```
npm install ng-dynamic-modal --save
```

### Uses

Import NgDynamicModal & ModalService

```
import { NgDynamicModalModule, ModalService } from 'ng-dynamic-modal';
```

Selector - 'modal'

Input - 'title', 'id'

Directives -  'modal-body' & 'modal-footer' to render dynamic content in body & fotter of modal.

Ouput - close() & open() events


```
<modal title="mymodal" id="myModal" (close)="doResetContent($event)" (open)="doOtherOperations($event)">
    <div modal-body>
        <input type="text">
    </div>
    <button modal-footer (click)="modalService.close('myModal')">click</button>
</modal>
```

ModalService exposes open(id) and close(id) functions to open & close the modal instance.

To open the modal call open(idOfmodal) method of modal service from parentComponent.

```
<button (click)="modalService.open('myModal')">click</button>
```

## Authors

* **Umang Khandelwal** - *Initial work* - [geekydreams](https://github.com/geeky-dreams)


## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

