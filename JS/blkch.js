 var contract;
            $(document).ready(function()
            {
                web3=new Web3(window.web3.currentProvider.enable());    
                var address="0x902e6B2E2B0dc35673bA7f7D7DF922B946185445";
                var abi=[
                    {
                        "inputs": [],
                        "stateMutability": "nonpayable",
                        "type": "constructor"
                    },
                    {
                        "inputs": [
                            {
                                "internalType": "uint256",
                                "name": "amt",
                                "type": "uint256"
                            }
                        ],
                        "name": "depoSit",
                        "outputs": [],
                        "stateMutability": "nonpayable",
                        "type": "function"
                    },
                    {
                        "inputs": [],
                        "name": "getBal",
                        "outputs": [
                            {
                                "internalType": "uint256",
                                "name": "",
                                "type": "uint256"
                            }
                        ],
                        "stateMutability": "view",
                        "type": "function"
                    },
                    {
                        "inputs": [
                            {
                                "internalType": "uint256",
                                "name": "amt",
                                "type": "uint256"
                            }
                        ],
                        "name": "withDraw",
                        "outputs": [],
                        "stateMutability": "nonpayable",
                        "type": "function"
                    }
                ];

                contract=new web3.eth.Contract(abi,address);

                contract.methods.getBal().call().then(function(bal)
                {
                    $('#getBal').html(bal);
                })
            })
            $('#depoSit').click(function()
            {
                var amt=0;
                amt=parseInt($('#amt').val());

                web3.eth.getAccounts().then(function(accounts)
                {
                   
                   return contract.methods.depoSit(amt).send({ from: accounts[0] });
                }).then(function(tranx)
                {
                    console.log(tranx);
                }).catch(function(tranx)
                {
                    console.log(tranx);
                })
            })
            $('#withDraw').click(function()
            {
                var amt=0;
                amt=parseInt($('#amt').val());

                web3.eth.getAccounts().then(function(accounts)
                {
                   
                   return contract.methods.withDraw(amt).send({ from: accounts[0] });
                }).then(function(tranx)
                {
                    console.log(tranx);
                }).catch(function(tranx)
                {
                    console.log(tranx);
                })
            })
       
