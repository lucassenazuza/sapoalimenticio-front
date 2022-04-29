import React from 'react';



function Table(props) {
    const stylesTableSize = {overflowY: "scroll", height:"300px"};
    const stylesTable = { marginLeft: "200px" , width: "40%", backgroundColor: "#EFF2F7", weight: "1px"};
    const stylesRow = { padding: "10px 100px 10px 100px" };
    const stylesElement = { padding: "10px", textAlign: "center", backgroundColor: "#FFFFFF" }
    const jsonProducts = JSON.parse(props.products);

    return (
        <div style={stylesTableSize}>
            <table class="table" style={stylesTable}>
                <thead>
                    <tr style={stylesRow}>
                        <th style={stylesRow}>Nome</th>
                        <th style={stylesRow}>Quantidade</th>
                        <th style={stylesRow}>Proteínas</th>
                        <th style={stylesRow}>Carboidratos</th>
                        <th style={stylesRow}>Gorduras</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        jsonProducts === null ? '' : jsonProducts.map((item) => (
                            <tr key={item.id} >
                                <td style={stylesElement}>{item.name}</td>
                                <td style={stylesElement}>{item.quantity}g</td>
                                <td style={stylesElement}>{item.protein}g</td>
                                <td style={stylesElement}>{item.carbohydrate}g</td>
                                <td style={stylesElement}>{item.fat}g</td>
                            </tr>
                        ))

                    }
                </tbody>
            </table>
        </div>
    );
}

export default Table;