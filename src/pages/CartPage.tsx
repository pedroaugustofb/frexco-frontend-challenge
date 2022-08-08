import React, { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'

import { DataTable }  from 'primereact/datatable'
import { Column } from 'primereact/column'
import { Button } from 'primereact/button'
import { Toast } from 'primereact/toast'
import { Dialog } from 'primereact/dialog'
import { Toolbar } from 'primereact/toolbar'

type Props = {}

interface Fruits {
    name: string,
    quant: number,
  }


const CartController = (props: Props) => {

    const emptyFruit = {
        name: '',
        quant: 0,
    }

    const toast = useRef(null);

    const [Fruits, setFruits] = useState<Fruits[]>([])

    const [product, setProduct] = useState<Fruits>(emptyFruit)
    const [deleteProductDialog, setDeleteProductDialog] = useState<boolean>(false);
    const [deleteCartDialog, setDeleteCartDialog] = useState<boolean>(false);

    useEffect( () => {
        if(localStorage.getItem('products') === null) {
            localStorage.setItem('products', JSON.stringify([]))
        }
        let products: any = localStorage.getItem('products')
        products = JSON.parse(products)
        setFruits(products)
    },[])


    const confirmDeleteProduct = (product: any) => {
        setProduct(product);
        setDeleteProductDialog(true);
    }

    const deleteProduct = () => {
        let _products = Fruits.filter( elem => elem.name !== product.name )
        setFruits(_products)
        localStorage.setItem('products', JSON.stringify(_products))
        setDeleteProductDialog(false)
        setProduct(emptyFruit)
        // @ts-ignore
        toast.current.show({ severity: 'success', summary: 'Successful', detail:`${product.name} deleted.`, life: 3000 }); 
    }

    const deleteAllCart = () => {
        localStorage.setItem('products', JSON.stringify([]))
        let products: any = localStorage.getItem('products')
        products = JSON.parse(products)
        setFruits(products)
        setDeleteCartDialog(false)
    }
    
    const increaseProduct = (product: any) => {
        let _products: any= Fruits.map( elem => {
            if(elem.name === product.name){
                elem.quant = elem.quant + 1;
            }
            return elem
        })
        setFruits(_products)
        localStorage.setItem('products', JSON.stringify(Fruits))
    }

    const decreaseProduct = (product: any) => {
        let _products: any = Fruits.map( elem => {
            if(elem.name === product.name){
                elem.quant = elem.quant - 1;
                if(elem.quant === 0){
                    setProduct(product)
                    confirmDeleteProduct(product)
                    if (!deleteProductDialog)
                    elem.quant = elem.quant + 1;
                }
            }

            return elem;
        })

        setFruits(_products)
        localStorage.setItem('products', JSON.stringify(_products))
    }


    const minusTemplate = (rowData: any) => {
        return (
            <React.Fragment >
                <div style={{display: 'flex', alignItems: 'center',}}>
                <Button icon="pi pi-minus" className="p-button-text p-button-error mr-2" onClick={() => decreaseProduct(rowData)} style={{margin: '0 20px 0 20px'}}/>
                </div>
            </React.Fragment>
        );
    }

    const plusTemplate = (rowData: any) => {
        return (
            <React.Fragment >
                <div style={{display: 'flex', alignItems: 'center',}}>
                <Button icon="pi pi-plus" className="p-button-text p-button-success mr-2" onClick={() => increaseProduct(rowData)} style={{margin: '0 20px 0 20px', fontSize: '16px'}}/>
                <div style={{ width: '10px', height: '81px', borderLeft: 'solid 1px #d7d7d7'}}></div>
                <Button icon="pi pi-trash" className="p-button-text p-button-warning" onClick={() => confirmDeleteProduct(rowData)} />
                </div>
            </React.Fragment>
        )
    }

    const footer = `In total there are ${Fruits ? Fruits.length : 0} types of fruits.`;


    const toolbarComponentRight = () => {
        return (
            <React.Fragment>
                <Button label="Delete all cart" icon="pi pi-trash" className="p-button-text p-button-bg p-button-danger" onClick={() => { setDeleteCartDialog(true) }}/>
            </React.Fragment>
        )
    }

    const toolbarComponentLeft = () => {
        return (
            <React.Fragment>
                <Link to="/" style={{textDecoration: 'none'}}>
                    <Button label="Comeback to store" icon="pi pi-arrow-left" className="p-button-text p-button-bg" />
                </Link>
            </React.Fragment>
        )
    }

  return (
    <>
    <div style={{display: 'flex', padding: '2rem', justifyContent: 'center', flexDirection: 'column', alignItems: 'center'}}>
        <Toast ref={toast}/>

        <Toolbar left={toolbarComponentLeft} right={toolbarComponentRight} style={{width: '85vw'}}/>

        <DataTable value={Fruits} lazy emptyMessage='No items added to cart.' footer={footer} scrollable scrollHeight="70vh" responsiveLayout="scroll" style={{marginTop: '25px', width: '85vw'}}>
            <Column field="name" header="Fruit" style={{ fontSize: '20px', alignItems: 'center', width: '250px'}}/>
            <Column body={minusTemplate} exportable={false} style={{  paddingRight: '0', display: 'flex', justifyContent: 'end' }}></Column>
            <Column field="quant" exportable={false} style={{ maxWidth: '50px', padding: '0', textAlign: 'center', display: 'flex', justifyContent: 'center', fontWeight: 'bold' }}></Column>
            <Column body={plusTemplate} exportable={false} style={{  paddingLeft: '0' }}></Column>
        </DataTable>
    </div>

    <Dialog visible={deleteProductDialog} onHide={() => setDeleteProductDialog(false)} style={{ width: '450px' }} header="Confirm" modal 
    footer={(
        <React.Fragment>
            <Button label="No" icon="pi pi-times" className="p-button-text p-button-bg" onClick={ () => setDeleteProductDialog(false)} />
            <Button label="Yes" icon="pi pi-check" className="p-button-text p-button-bg" onClick={() => deleteProduct() } />
        </React.Fragment>
    )}
    >
         <div className="confirmation-content">
            { product && <span>Are you sure you want to remove <b>{product.name}</b> from your cart?</span>}
        </div>
    </Dialog>

    <Dialog visible={deleteCartDialog} onHide={() => setDeleteCartDialog(false)} style={{ width: '450px' }} header="Confirm" modal 
    footer={(
        <React.Fragment>
            <Button label="No" icon="pi pi-times" className="p-button-text p-button-bg" onClick={ () => setDeleteCartDialog(false)} />
            <Button label="Yes" icon="pi pi-check" className="p-button-text p-button-bg" onClick={() => deleteAllCart() } />
        </React.Fragment>
    )}
    > 
        <div className="confirmation-content">
            {<span>Are you sure you want to remove <b>all products</b> from your cart?</span>}
        </div>
    </Dialog>
    </>

  )
}

export default CartController