// Dữ liệu phần mềm
const softwareData = [
    //____________________________WINDOW_ALL_IN_ONE____________________________

    {
        id: 'windowsAIO',
        name: 'Windows All In One',
        description: 'Hệ điều hành Windows 7 - 11 từ PITVN Community Resources',
        category: 'windows',
        icon: 'fab fa-windows',
        versions: [
            //AIO Windows 11 Version 25H2 Build 26200.5074
            {
                name: 'AIO Windows 11 Version 25H2 Build 26200.5074',
                size: '15.2 GB',
                editions: [
                    //Home, Pro, Edu, Workstation, Enterprise, IoT 29 August 2024
                    {
                        name: 'Home, Pro, Edu, Workstation, Enterprise, IoT 29 August 2024',
                        description: '64bit',
                        size: '4.8 GB',
                        links: [
                            {
                                name: 'PITVN Google Drive',
                                url: 'https://www.google.com/url?q=https://drive.google.com/uc?id%3D19akxV-bT8RqQMjFF_GAuEir3-pr0UZAI%26export%3Ddownload&sa=D&source=editors&ust=1757854453437616&usg=AOvVaw255cGUJPZRgQc-V6MaC4mW',
                                icon: 'fab fa-google-drive'
                            },
                            {
                                name: 'PITVN Google Drive',
                                url: 'https://www.google.com/url?q=https://drive.google.com/uc?id%3D1QquUS7oxY7KdAyYJgnywTc2sb_GwQ_a4%26export%3Ddownload&sa=D&source=editors&ust=1757854453437557&usg=AOvVaw1QfKeqmCBhEVVoltrOahuU',
                                icon: 'fab fa-google-drive'
                            },
                            {
                                name: 'PITVN Onedrive',
                                url: 'https://www.google.com/url?q=https://frsdev-my.sharepoint.com/:u:/g/personal/anthony_frsdev_onmicrosoft_com/ETXyOtfAiFZOpRVjeSf63OQBXinuRDGUFIbBTnupOiYcWw&sa=D&source=editors&ust=1757854453437481&usg=AOvVaw2FPQ_Jb2i41jfr_wZ7pWKn',
                                icon: 'fa-solid fa-cloud'
                            },
                            {
                                name: 'PITVN Onedrive',
                                url: 'https://www.google.com/url?q=https://glennsferryschools-my.sharepoint.com/:u:/g/personal/billgates_glennsferryschools_onmicrosoft_com/EboOi1odQKREuUltYGIb7LkBxtKzJAYCcs9IWc5irQY8uw&sa=D&source=editors&ust=1757854453437407&usg=AOvVaw3DRDb0ztng0FuMwZO1Abe8',
                                icon: 'fa-solid fa-cloud'
                            }
                        ]
                    }

                ]
            },
            //AIO Windows 11 Version 24H2 Build 26100.560
            {
                name: 'AIO Windows 11 Version 24H2 Build 26100.560',
                size: '5.2 GB',
                editions: [
                    //Home, Pro, Edu, Workstation, Enterprise, IoT 18 May 2024
                    {
                        name: 'Home, Pro, Edu, Workstation, Enterprise, IoT 18 May 2024',
                        description: '64bit',
                        size: '4.8 GB',
                        links: [
                            {
                                name: 'PITVN Google Drive',
                                url: 'https://www.google.com/url?q=https://drive.google.com/uc?id%3D1t0MwHAEQ1u4nwOzXvnmhkLjCxS5bLk7O%26export%3Ddownload&sa=D&source=editors&ust=1757854453436941&usg=AOvVaw3PSKyEhrCe6zLUc06Uw8dI',
                                icon: 'fab fa-google-drive'
                            },
                            {
                                name: 'PITVN Google Drive',
                                url: 'https://www.google.com/url?q=https://drive.google.com/uc?id%3D1YnNebOHDRRchxiuczylJk7Izv8U9w53j%26export%3Ddownload&sa=D&source=editors&ust=1757854453436894&usg=AOvVaw0tt6Ro7AekeKQf4NJkFOmW',
                                icon: 'fab fa-google-drive'
                            },
                            {
                                name: 'PITVN Onedrive',
                                url: 'https://www.google.com/url?q=https://glennsferryschools-my.sharepoint.com/:u:/g/personal/billgates_glennsferryschools_onmicrosoft_com/EZb50p-PkJJJnRd9q76dIZUBmiC5_pQH0LIp8rw7rtNt0A&sa=D&source=editors&ust=1757854453436776&usg=AOvVaw1hVurdT2QarE6VpEdPQT5A',
                                icon: 'fa-solid fa-cloud'
                            },
                            {
                                name: 'PITVN Onedrive',
                                url: 'https://www.google.com/url?q=https://icedubai-my.sharepoint.com/:u:/g/personal/billgates_icedubai_onmicrosoft_com/EXvG54eekU1PpJRUfHz3cUIB9VhKwV7yPxoQ6qbz7U9D4w&sa=D&source=editors&ust=1757854453436844&usg=AOvVaw2XykTdLQtSyLgYVAc68EAf',
                                icon: 'fa-solid fa-cloud'
                            }
                        ]
                    }

                ]
            },
            //AIO Windows 11 Version 23H2 Build 22631.3593
            {
                name: 'AIO Windows 11 Version 23H2 Build 22631.3593',
                size: '5.2 GB',
                editions: [
                    {
                        name: 'Home, Pro, Edu, Workstation, Enterprise, IoT 15 May 2024',
                        description: '64bit',
                        size: '4.8 GB',
                        links: [
                            {
                                name: 'PITVN Google Drive',
                                url: 'https://www.google.com/url?q=https://drive.google.com/uc?id%3D15SEFyphS3hMxy-hlnc14gEBW8R5ruXK-%26export%3Ddownload&sa=D&source=editors&ust=1757854453436319&usg=AOvVaw0N1PXerdTbMLxceIxXVlNA',
                                icon: 'fab fa-google-drive'
                            },
                            {
                                name: 'PITVN Google Drive',
                                url: 'https://www.google.com/url?q=https://drive.google.com/uc?id%3D1NC97j-PWQiAxI3lpizrMWYnSPz2nNqqv%26export%3Ddownload&sa=D&source=editors&ust=1757854453436269&usg=AOvVaw3qdqEFA0FF-mZkB5D1dd-p',
                                icon: 'fab fa-google-drive'
                            },
                            {
                                name: 'PITVN Onedrive',
                                url: 'https://www.google.com/url?q=https://icedubai-my.sharepoint.com/:u:/g/personal/billgates_icedubai_onmicrosoft_com/EcCl6jimATREnbUNBEgTRScBfglZmqVp5tGznXDZRyRCcg&sa=D&source=editors&ust=1757854453436220&usg=AOvVaw0ESsXOtsvt0C0-Jw5lqMhw',
                                icon: 'fa-solid fa-cloud'
                            },
                            {
                                name: 'PITVN Onedrive',
                                url: 'https://www.google.com/url?q=https://glennsferryschools-my.sharepoint.com/:u:/g/personal/billgates_glennsferryschools_onmicrosoft_com/Ebzr0WvWZ0FJgkv1PbJuEiQByIPkT7OLdwxB3Q8RI-0lDg&sa=D&source=editors&ust=1757854453436167&usg=AOvVaw2hI7DrKRn7SPiiReqaHarS',
                                icon: 'fa-solid fa-cloud'
                            }
                        ]
                    }]
            },
            //AIO Windows 11 Version 22H2 Build 22621.3593
            {
                name: 'AIO Windows 11 Version 22H2 Build 22621.3593',
                size: '5.2 GB',
                editions: [
                    {
                        name: 'Home, Pro, Edu, Workstation, Enterprise, IoT 15 May 2024',
                        description: '64bit',
                        size: '4.8 GB',
                        links: [
                            {
                                name: 'PITVN Google Drive',
                                url: 'https://www.google.com/url?q=https://drive.google.com/uc?id%3D1rQWu-8olHwkkaX1_1zcV4MZJg4YpUvsW%26export%3Ddownload&sa=D&source=editors&ust=1757854453435734&usg=AOvVaw1nETIlTDPlvAxCR4uGOg-j',
                                icon: 'fab fa-google-drive'
                            },
                            {
                                name: 'PITVN Google Drive',
                                url: 'https://www.google.com/url?q=https://drive.google.com/uc?id%3D1T_5aA8STnKusRRaHxcaUJlSiolZznREC%26export%3Ddownload&sa=D&source=editors&ust=1757854453435688&usg=AOvVaw2_Rm0--5PMtyRDmkFBCTa3',
                                icon: 'fab fa-google-drive'
                            },
                            {
                                name: 'PITVN Onedrive',
                                url: 'https://www.google.com/url?q=https://icedubai-my.sharepoint.com/:u:/g/personal/billgates_icedubai_onmicrosoft_com/Ed43nakjPSlJljroCIDRfDMBM6OkOHdgM9pojmieVva2Bw&sa=D&source=editors&ust=1757854453435639&usg=AOvVaw0sjMgMtHZ69O5lWfIg2Gdf',
                                icon: 'fa-solid fa-cloud'
                            },
                            {
                                name: 'PITVN Onedrive',
                                url: 'https://www.google.com/url?q=https://glennsferryschools-my.sharepoint.com/:u:/g/personal/billgates_glennsferryschools_onmicrosoft_com/EUw2tOt0dW5Bv-uxOlNMvV4BLiUWL1tQ1JpbORGYp5hc5Q&sa=D&source=editors&ust=1757854453435586&usg=AOvVaw1XyY_46NBQzUMahu3Zask6',
                                icon: 'fa-solid fa-cloud'
                            }
                        ]
                    }]
            }
            ,
            //AIO Windows 11 Version 21H2 Build 22000.2960
            {
                name: 'AIO Windows 11 Version 21H2 Build 22000.2960',
                size: '5.2 GB',
                editions: [
                    {
                        name: 'Home, Pro, Edu, Workstation, Enterprise, IoT 15 May 2024',
                        description: '64bit',
                        size: '4.8 GB',
                        links: [
                            {
                                name: 'PITVN Google Drive',
                                url: 'https://www.google.com/url?q=https://drive.google.com/uc?id%3D1KOWiS7NhcoVIcqxpSXVm5jqiMSJmEtHC%26export%3Ddownload&sa=D&source=editors&ust=1757854453435166&usg=AOvVaw2xGwl6QZW6cQST2sIZqnaX',
                                icon: 'fab fa-google-drive'
                            },
                            {
                                name: 'PITVN Google Drive',
                                url: 'https://www.google.com/url?q=https://drive.google.com/uc?id%3D1BP5TRPfeXSoJagU8Jv9tXd-aDXffePSv%26export%3Ddownload&sa=D&source=editors&ust=1757854453435119&usg=AOvVaw0uw9UCVHrK_LVtrUg4TwGz',
                                icon: 'fab fa-google-drive'
                            },
                            {
                                name: 'PITVN Onedrive',
                                url: 'https://www.google.com/url?q=https://icedubai-my.sharepoint.com/:u:/g/personal/billgates_icedubai_onmicrosoft_com/EVOLnh7hS0NPn6YJxPehjpoBrLeIxBo8DuFwD7-kGXHMvA&sa=D&source=editors&ust=1757854453435071&usg=AOvVaw2spdbBebNuRa0R7FOA37G-',
                                icon: 'fa-solid fa-cloud'
                            },
                            {
                                name: 'PITVN Onedrive',
                                url: 'https://www.google.com/url?q=https://glennsferryschools-my.sharepoint.com/:u:/g/personal/billgates_glennsferryschools_onmicrosoft_com/ESe3nHYwB5lEmRNtguONF2kBc-hB3Kw1FoABppELRgaN0A&sa=D&source=editors&ust=1757854453435009&usg=AOvVaw1xEMAD4g0NREWBNiEz_Iqy',
                                icon: 'fa-solid fa-cloud'
                            }
                        ]
                    }]
            },
            //AIO Windows 10 Version 22H2 Build 19045.4412
            {
                name: 'AIO Windows 10 Version 22H2 Build 19045.4412',
                size: '5.2 GB',
                editions: [
                    {
                        name: 'Home, Pro, Edu, Workstation, Enterprise, IoT 14 May 2024',
                        description: '64bit',
                        size: '4.8 GB',
                        links: [
                            {
                                name: 'PITVN Google Drive',
                                url: 'https://www.google.com/url?q=https://drive.google.com/uc?id%3D1QCrmxiaoHnUkYl8eUvSiOE7xf5mjC8vX%26export%3Ddownload&sa=D&source=editors&ust=1757854453434266&usg=AOvVaw2yWIA3kpREI-7dW2NyDeQ5',
                                icon: 'fab fa-google-drive'
                            },
                            {
                                name: 'PITVN Google Drive',
                                url: 'https://www.google.com/url?q=https://drive.google.com/uc?id%3D17rlDf3Suik-tEMQAQVmNiGlrbZxPtCq7%26export%3Ddownload&sa=D&source=editors&ust=1757854453434217&usg=AOvVaw2rXaOdSkabqMYtxjNg5Mm-',
                                icon: 'fab fa-google-drive'
                            },
                            {
                                name: 'PITVN Onedrive',
                                url: 'https://www.google.com/url?q=https://icedubai-my.sharepoint.com/:u:/g/personal/billgates_icedubai_onmicrosoft_com/EVLS1S3Fz9VGp5AmWOvk-TEBVJkF0Q3OmZYJULB2a8olEw&sa=D&source=editors&ust=1757854453434167&usg=AOvVaw2giKfxSiYcgIYCwOLn2PwR',
                                icon: 'fa-solid fa-cloud'
                            },
                            {
                                name: 'PITVN Onedrive',
                                url: 'https://www.google.com/url?q=https://glennsferryschools-my.sharepoint.com/:u:/g/personal/billgates_glennsferryschools_onmicrosoft_com/EXjHBh55pgpDtZBW7BiE1nYBhbIkTR2YFzOHBCXSI_J-Ig&sa=D&source=editors&ust=1757854453434113&usg=AOvVaw2UkWq2kQzirnefKMarVO71',
                                icon: 'fa-solid fa-cloud'
                            }
                        ]
                    },
                    {
                        name: 'Home, Pro, Edu, Workstation, Enterprise, IoT 14 May 2024',
                        description: '32bit',
                        size: '4.8 GB',
                        links: [
                            {
                                name: 'PITVN Google Drive',
                                url: 'https://www.google.com/url?q=https://drive.google.com/uc?id%3D1tYC3cdE7X-TQHI1vxq3qUsnl9EYj1r3l%26export%3Ddownload&sa=D&source=editors&ust=1757854453434595&usg=AOvVaw0PEbQez8qJQjtHgbZ2xNOZ',
                                icon: 'fab fa-google-drive'
                            },
                            {
                                name: 'PITVN Google Drive',
                                url: 'https://www.google.com/url?q=https://drive.google.com/uc?id%3D1LfEQKKSJaHRLAOKSiTu6D_z1oiIcNTSP%26export%3Ddownload&sa=D&source=editors&ust=1757854453434551&usg=AOvVaw3MEDPs0WP3E48GFIqWkkQb',
                                icon: 'fab fa-google-drive'
                            },
                            {
                                name: 'PITVN Onedrive',
                                url: 'https://www.google.com/url?q=https://icedubai-my.sharepoint.com/:u:/g/personal/billgates_icedubai_onmicrosoft_com/EYicg9Vd9LpCgWVMowKbKPIBsu3EUqm6Rz-wEjKk_0l5Yg&sa=D&source=editors&ust=1757854453434503&usg=AOvVaw0yt6gblqRhme97o-fToxoI',
                                icon: 'fa-solid fa-cloud'
                            },
                            {
                                name: 'PITVN Onedrive',
                                url: 'https://www.google.com/url?q=https://glennsferryschools-my.sharepoint.com/:u:/g/personal/billgates_glennsferryschools_onmicrosoft_com/ERi06sLbZydKgREWSHd6sGQBU3u5Dc-P5VlKdPRugAEr2Q&sa=D&source=editors&ust=1757854453434447&usg=AOvVaw0NyDahEPnYTChqw5yLXWc3',
                                icon: 'fa-solid fa-cloud'
                            }
                        ]
                    }
                ]
            },
            //AIO Windows 10 Version 21H2 Build 19044.4412
            {
                name: 'AIO Windows 10 Version 21H2 Build 19044.4412',
                size: '5.2 GB',
                editions: [
                    {
                        name: 'Home, Pro, Edu, Workstation, Enterprise, IoT 14 May 2024',
                        description: '64bit',
                        size: '4.8 GB',
                        links: [
                            {
                                name: 'PITVN Google Drive',
                                url: 'https://www.google.com/url?q=https://drive.google.com/uc?id%3D1r_BSEAj06WF6vGu1GVFcG9dDdYqRd1Pp%26export%3Ddownload&sa=D&source=editors&ust=1757854453433315&usg=AOvVaw1qDO98TZEeiq12v_4b4rWo',
                                icon: 'fab fa-google-drive'
                            },
                            {
                                name: 'PITVN Google Drive',
                                url: 'https://www.google.com/url?q=https://drive.google.com/uc?id%3D1n7jt2JxCQUR7es9ooDOh7iiKxAm-xEIK%26export%3Ddownload&sa=D&source=editors&ust=1757854453433266&usg=AOvVaw1hINyQHsQls96fY3ujsYSG',
                                icon: 'fab fa-google-drive'
                            },
                            {
                                name: 'PITVN Onedrive',
                                url: 'https://www.google.com/url?q=https://icedubai-my.sharepoint.com/:u:/g/personal/billgates_icedubai_onmicrosoft_com/EZGIFO5Wk-dKiFRofKfpdU8B23mknfYZ9D8f7w6pDgrijQ&sa=D&source=editors&ust=1757854453433205&usg=AOvVaw1Xxmx4-IVEaYkrX01wQdpN',
                                icon: 'fa-solid fa-cloud'
                            },
                            {
                                name: 'PITVN Onedrive',
                                url: 'https://www.google.com/url?q=https://glennsferryschools-my.sharepoint.com/:u:/g/personal/billgates_glennsferryschools_onmicrosoft_com/Ee2cgFFumQZCkUhLDJ1flJoBzhvyOA1OQImhUh3r01Zjnw&sa=D&source=editors&ust=1757854453433141&usg=AOvVaw0oWtWjiVGLReAeEHiLQH-r',
                                icon: 'fa-solid fa-cloud'
                            }
                        ]
                    },
                    {
                        name: 'Home, Pro, Edu, Workstation, Enterprise, IoT 14 May 2024',
                        description: '32bit',
                        size: '4.8 GB',
                        links: [
                            {
                                name: 'PITVN Google Drive',
                                url: 'https://www.google.com/url?q=https://drive.google.com/uc?id%3D11_OOYm0TVhzCzgDdU38mCfbfQmJE_7Lo%26export%3Ddownload&sa=D&source=editors&ust=1757854453433657&usg=AOvVaw3y4N7lr3s1qAnTMBLO65jB',
                                icon: 'fab fa-google-drive'
                            },
                            {
                                name: 'PITVN Google Drive',
                                url: 'https://www.google.com/url?q=https://drive.google.com/uc?id%3D1c3BYM_ueqsGfAA5dBmWGyY2IoJF4IGyG%26export%3Ddownload&sa=D&source=editors&ust=1757854453433612&usg=AOvVaw3C0GrvAKnTg1Px2H2mwlN1',
                                icon: 'fab fa-google-drive'
                            },
                            {
                                name: 'PITVN Onedrive',
                                url: 'https://www.google.com/url?q=https://icedubai-my.sharepoint.com/:u:/g/personal/billgates_icedubai_onmicrosoft_com/EWknXXzHW_1EslfvA-4WQrAB421gkwwW_sbr98GCzqumdA&sa=D&source=editors&ust=1757854453433565&usg=AOvVaw2kDJFaz5JmwH4eqZHq0usA',
                                icon: 'fa-solid fa-cloud'
                            },
                            {
                                name: 'PITVN Onedrive',
                                url: 'https://www.google.com/url?q=https://glennsferryschools-my.sharepoint.com/:u:/g/personal/billgates_glennsferryschools_onmicrosoft_com/ER_kCK3z-8RBmHE9h7VWJfwB1tHM5TNsd32FBuMxUN3ZOw&sa=D&source=editors&ust=1757854453433512&usg=AOvVaw3KvKfG94klWm5ru8aOQ47g',
                                icon: 'fa-solid fa-cloud'
                            }
                        ]
                    }
                ]
            },
            //AIO Windows 10 Version 1809 Build 17763.5820
            {
                name: 'AIO Windows 10 Version 1809 Build 17763.5820',
                size: '5.2 GB',
                editions: [
                    {
                        name: 'Home, Pro, Edu, Workstation, Enterprise, IoT 14 May 2024',
                        description: '64bit',
                        size: '4.8 GB',
                        links: [
                            {
                                name: 'PITVN Google Drive',
                                url: 'https://www.google.com/url?q=https://drive.google.com/uc?id%3D1eGgdxQxyeYd9QYR5b0LlSFV8MBkJ6N2p%26export%3Ddownload&sa=D&source=editors&ust=1757854453432388&usg=AOvVaw2Mzsg4A19IUG5vRtu0unaU',
                                icon: 'fab fa-google-drive'
                            },
                            {
                                name: 'PITVN Google Drive',
                                url: 'https://www.google.com/url?q=https://drive.google.com/uc?id%3D1vB0gpM0-3ysEqUCKTzq3F0Ic_bpCtMMN%26export%3Ddownload&sa=D&source=editors&ust=1757854453432339&usg=AOvVaw3xXNX4ku0qOeA3tIL2WiKf',
                                icon: 'fab fa-google-drive'
                            },
                            {
                                name: 'PITVN Onedrive',
                                url: 'https://www.google.com/url?q=https://icedubai-my.sharepoint.com/:u:/g/personal/billgates_icedubai_onmicrosoft_com/EfsJoUXuU9hBhEHDtjlf7-cBwdCmdv_kfjEmSFLTb1ucyw&sa=D&source=editors&ust=1757854453432291&usg=AOvVaw2heVgC_4PUIeLfYYOTRz_V',
                                icon: 'fa-solid fa-cloud'
                            },
                            {
                                name: 'PITVN Onedrive',
                                url: 'https://www.google.com/url?q=https://glennsferryschools-my.sharepoint.com/:u:/g/personal/billgates_glennsferryschools_onmicrosoft_com/EeHBaLNYacFCtvdPjalLqb4B89YDN9rLsmF6ZxQL2g6H2A&sa=D&source=editors&ust=1757854453432236&usg=AOvVaw1SIhknk4BrWFse2KJxjbQj',
                                icon: 'fa-solid fa-cloud'
                            }
                        ]
                    },
                    {
                        name: 'Home, Pro, Edu, Workstation, Enterprise, IoT 14 May 2024',
                        description: '32bit',
                        size: '4.8 GB',
                        links: [
                            {
                                name: 'PITVN Google Drive',
                                url: 'https://www.google.com/url?q=https://drive.google.com/uc?id%3D1BdCVsnIViiVm6h8rpTJ2PZN9N7uJ92TG%26export%3Ddownload&sa=D&source=editors&ust=1757854453432733&usg=AOvVaw3JvBp8EPiDg1ysBucjmJF6',
                                icon: 'fab fa-google-drive'
                            },
                            {
                                name: 'PITVN Google Drive',
                                url: 'https://www.google.com/url?q=https://drive.google.com/uc?id%3D1o5wt-LCaV0pC9xzg8ewBfR46X7oUC8Le%26export%3Ddownload&sa=D&source=editors&ust=1757854453432682&usg=AOvVaw0nqfs014b4XBv4BEorJmW8',
                                icon: 'fab fa-google-drive'
                            },
                            {
                                name: 'PITVN Onedrive',
                                url: 'https://www.google.com/url?q=https://icedubai-my.sharepoint.com/:u:/g/personal/billgates_icedubai_onmicrosoft_com/EUAFCxEoq2lBhiRmHCu5GiQBokpCGn67HiSRNMMrOrQLzg&sa=D&source=editors&ust=1757854453432633&usg=AOvVaw2KLFzCpFuBbnEawTas8smy',
                                icon: 'fa-solid fa-cloud'
                            },
                            {
                                name: 'PITVN Onedrive',
                                url: 'https://www.google.com/url?q=https://glennsferryschools-my.sharepoint.com/:u:/g/personal/billgates_glennsferryschools_onmicrosoft_com/EV44qm8YDj5AjkiyYbVMP7gB0STJakz9Ue4YfTEkt1Nbqw&sa=D&source=editors&ust=1757854453432581&usg=AOvVaw3vM16NUICDXnZ09pkLttcf',
                                icon: 'fa-solid fa-cloud'
                            }
                        ]
                    }
                ]
            },
            // AIO Windows 11 Enterprise Build 26100.4061
            // AIO Windows 10 Enterprise Build 19044.5854
            // AIO Windows 10 Enterprise Build 17763.7314
            // AIO Windows 10 Enterprise Build 14393.6796
            // AIO Windows 10 Enterprise Build 10240.20526
            // AIO Windows 8.1 Build 9600.21972
            {
                name: 'AIO Windows 8.1 Build 9600.21972',
                size: '5.2 GB',
                editions: [
                    {
                        name: 'Starter, Home, Pro, Ultimate, Enterprise 15 May 2024',
                        description: '64bit',
                        size: '4.8 GB',
                        links: [
                            {
                                name: 'PITVN Google Drive',
                                url: 'https://www.google.com/url?q=https://drive.google.com/uc?id%3D14q_W79IurZlmBf0SQWoeENsLaO_nRmbx%26export%3Ddownload&sa=D&source=editors&ust=1757854453427378&usg=AOvVaw3DUz2DCNSlaxIACHZeLKgt',
                                icon: 'fab fa-google-drive'
                            },
                            {
                                name: 'PITVN Google Drive',
                                url: 'https://www.google.com/url?q=https://drive.google.com/uc?id%3D1CyvKeGJbrdSABWlxkSYcuc9rK4GlFlHU%26export%3Ddownload&sa=D&source=editors&ust=1757854453427327&usg=AOvVaw23zdAEMUBSHFFNdZcD3eYZ',
                                icon: 'fab fa-google-drive'
                            },
                            {
                                name: 'PITVN Onedrive',
                                url: 'https://www.google.com/url?q=https://icedubai-my.sharepoint.com/:u:/g/personal/billgates_icedubai_onmicrosoft_com/EV3Vg4fvySJLo9xZCmb6Wh0BgvzI3qN6SuIomzaNN04QVA&sa=D&source=editors&ust=1757854453427282&usg=AOvVaw2FrTf1wb8mT1IUq3wox_Ms',
                                icon: 'fa-solid fa-cloud'
                            },
                            {
                                name: 'PITVN Onedrive',
                                url: 'https://www.google.com/url?q=https://glennsferryschools-my.sharepoint.com/:u:/g/personal/billgates_glennsferryschools_onmicrosoft_com/EYp20zGax71Co-DJZE7yEPMBJofu4Bpx7FBJ5d-mXHUAEA&sa=D&source=editors&ust=1757854453427232&usg=AOvVaw2opAA8xcjyro07c8ime5Rz',
                                icon: 'fa-solid fa-cloud'
                            }
                        ]
                    },

                ]
            },
            // AIO Windows 7 SP1 Build 7601.27117
            {
                name: 'AIO Windows 7 SP1 Build 7601.27117',
                size: '5.2 GB',
                editions: [
                    {
                        name: 'Starter, Home, Pro, Ultimate, Enterprise 15 May 2024',
                        description: '64bit',
                        size: '4.8 GB',
                        links: [
                            {
                                name: 'PITVN Google Drive',
                                url: 'https://www.google.com/url?q=https://drive.google.com/uc?id%3D1rjpEJzo-u53D7XEnKvv4BVSog9BA6oD7%26export%3Ddownload&sa=D&source=editors&ust=1757854453426486&usg=AOvVaw3JEyDwX3oiID_bfnwbm0dM',
                                icon: 'fab fa-google-drive'
                            },
                            {
                                name: 'PITVN Google Drive',
                                url: 'https://www.google.com/url?q=https://drive.google.com/uc?id%3D1JEsSEIwgDnVXJn1MrPA-LLA-txCncJUs%26export%3Ddownload&sa=D&source=editors&ust=1757854453426422&usg=AOvVaw0a7HEZB8TLRJ8p_FPU3zCx',
                                icon: 'fab fa-google-drive'
                            },
                            {
                                name: 'PITVN Onedrive',
                                url: 'https://www.google.com/url?q=https://icedubai-my.sharepoint.com/:u:/g/personal/billgates_icedubai_onmicrosoft_com/EdoEibXSmxlPkvw-Nof33wEBFp7Z2VgzbQYiqF14yhrULw&sa=D&source=editors&ust=1757854453426358&usg=AOvVaw1q6xSqxQ48QRFLdy9j_lPQ',
                                icon: 'fa-solid fa-cloud'
                            },
                            {
                                name: 'PITVN Onedrive',
                                url: 'https://www.google.com/url?q=https://glennsferryschools-my.sharepoint.com/:u:/g/personal/billgates_glennsferryschools_onmicrosoft_com/EQ_xHLHsGZtDl233a_FYrrYBSG-gq30FuN4ZUeIqud36CQ&sa=D&source=editors&ust=1757854453426306&usg=AOvVaw3ClD_c8mUQEYh5qiAmajGT',
                                icon: 'fa-solid fa-cloud'
                            }
                        ]
                    },
                    {
                        name: 'Starter, Home, Pro, Ultimate, Enterprise 15 May 2024',
                        description: '32bit',
                        size: '4.8 GB',
                        links: [
                            {
                                name: 'PITVN Google Drive',
                                url: 'https://www.google.com/url?q=https://drive.google.com/uc?id%3D1ndKx9yMfItSfelwqBaP8sdks-tGr18-r%26export%3Ddownload&sa=D&source=editors&ust=1757854453426837&usg=AOvVaw3m0S76is0jacvGFRwGCuRu',
                                icon: 'fab fa-google-drive'
                            },
                            {
                                name: 'PITVN Google Drive',
                                url: 'https://www.google.com/url?q=https://drive.google.com/uc?id%3D1KVMBOvnvrrPBdCLRiT80MBeGhqMuJU5U%26export%3Ddownload&sa=D&source=editors&ust=1757854453426791&usg=AOvVaw0e2I_OHiJGimsCr6xI3PYY',
                                icon: 'fab fa-google-drive'
                            },
                            {
                                name: 'PITVN Onedrive',
                                url: 'https://www.google.com/url?q=https://icedubai-my.sharepoint.com/:u:/g/personal/billgates_icedubai_onmicrosoft_com/EdFQmSCOj6hHijxs7PowG9ABlbplgRxejp_49EH4_EMW6w&sa=D&source=editors&ust=1757854453426743&usg=AOvVaw3hva17zjqv1kjje71MhTm4',
                                icon: 'fa-solid fa-cloud'
                            },
                            {
                                name: 'PITVN Onedrive',
                                url: 'https://www.google.com/url?q=https://glennsferryschools-my.sharepoint.com/:u:/g/personal/billgates_glennsferryschools_onmicrosoft_com/ES9-3A4gd1FBmQ1R2cUjjRkBkLEtov7ZUK3f6s_-7mOp8Q&sa=D&source=editors&ust=1757854453426692&usg=AOvVaw3uQjfzlL3_qyOfv3aw3f4Y',
                                icon: 'fa-solid fa-cloud'
                            }
                        ]
                    }
                ]
            }

        ]
    },
    //____________________________END_WINDOW_ALL_IN_ONE____________________________

    //____________________________WINDOW_11____________________________

    {
        id: 'windows11',
        name: 'Windows 11',
        description: 'Hệ điều hành Windows 11 từ PITVN Community Resources',
        category: 'windows',
        icon: 'fab fa-windows',
        versions: [
            //------------------------------------ OK -------------
            //Windows 11 - MSDN - 24H2 Build 26100.4946---------------------- 19 August 2025
            {
                name: 'Windows 11 - MSDN - 24H2 Build 26100.4946 19 August 2025',
                size: '5.2 GB',
                editions: [
                    //Business (Edu/Enterprise/Pro/Workstations) arm64
                    {
                        name: 'Business (Edu/Enterprise/Pro/Workstations)',
                        description: 'arm64',
                        size: '4.8 GB',
                        links: [
                            {
                                name: 'PITVN Google Drive',
                                url: 'https://drive.usercontent.google.com/download?id=1LasaFWR2Un4Qt11x_uCmZ3SHP2l0A-IU&export=download&authuser=0',
                                icon: 'fab fa-google-drive'
                            },
                            {
                                name: 'PITVN Google Drive',
                                url: 'https://drive.usercontent.google.com/download?id=16q5IZPU_2lAN8JO25Q_WXg8GyxCgmMKC&export=download&authuser=0',
                                icon: 'fab fa-google-drive'
                            },
                            {
                                name: 'PITVN Onedrive',
                                url: 'https://www.google.com/url?q=https://frsdev-my.sharepoint.com/:u:/g/personal/anthony_frsdev_onmicrosoft_com/EWkemBEdHGlIo5teryohNEQBs7fucr6v4mU1zvOsC1S6kg&sa=D&source=editors&ust=1757854453311619&usg=AOvVaw2VH5kRgwpU_PGI8hm5F2MM',
                                icon: 'fa-solid fa-cloud'
                            },
                            {
                                name: 'PITVN Onedrive',
                                url: 'https://www.google.com/url?q=https://glennsferryschools-my.sharepoint.com/:u:/g/personal/billgates_glennsferryschools_onmicrosoft_com/EWcp7PIuJTZKlPBdn3uwJqkBtpqgTIeHbvRY0caiNWXQ7g&sa=D&source=editors&ust=1757854453311543&usg=AOvVaw0GRwMFrogo8iaSZ3xVl7M2',
                                icon: 'fa-solid fa-cloud'
                            }
                        ]
                    },
                    //Business (Edu/Enterprise/Pro/Workstations) 64bit
                    {
                        name: 'Business (Edu/Enterprise/Pro/Workstations)',
                        description: '64bit',
                        size: '5.0 GB',
                        links: [
                            {
                                name: 'PITVN Google Drive',
                                url: 'https://drive.usercontent.google.com/download?id=19dNSFBNkVeh2rKmEH-oap1dGI3MlQgpp&export=download&authuser=0',
                                icon: 'fab fa-google-drive'
                            },
                            {
                                name: 'PITVN Google Drive',
                                url: 'https://drive.usercontent.google.com/download?id=1M19ZHFxIljaCwxlkmuQcx7aT4jhD6Q_x&export=download&authuser=0',
                                icon: 'fab fa-google-drive'
                            },
                            {
                                name: 'PITVN Onedrive',
                                url: 'https://www.google.com/url?q=https://glennsferryschools-my.sharepoint.com/:u:/g/personal/billgates_glennsferryschools_onmicrosoft_com/EQH97pV2OJhMttrkCIa5FIwBMnvy5ix_YjASOwf9jc3XBQ&sa=D&source=editors&ust=1757854453311938&usg=AOvVaw0g3gYhP2fIB7u0FZ14BG39',
                                icon: 'fa-solid fa-cloud'
                            },
                            {
                                name: 'PITVN Onedrive',
                                url: 'https://www.google.com/url?q=https://frsdev-my.sharepoint.com/:u:/g/personal/anthony_frsdev_onmicrosoft_com/EYv5yRk4c3JFnHJNAK9kEvQBEEX9irdb1-YlD2xz1Nk3EA&sa=D&source=editors&ust=1757854453312010&usg=AOvVaw0UqsiOxQEvqQ0kK7H1kQTA',
                                icon: 'fa-solid fa-cloud'
                            }

                        ]
                    },
                    //Consumer (Home/SL/Pro/Edu/Workstations) arm64
                    {
                        name: 'Consumer (Home/SL/Pro/Edu/Workstations) ',
                        description: 'arm64',
                        size: '5.2 GB',
                        links: [
                            {
                                name: 'PITVN Google Drive',
                                url: 'https://www.google.com/url?q=https://drive.google.com/uc?id%3D1XjHVomhqrZd3NwYHDO-ySO88q__D3zXS%26export%3Ddownload&sa=D&source=editors&ust=1757870412378388&usg=AOvVaw2YLZexbg1jlNHv_qu9stkU',
                                icon: 'fab fa-google-drive'
                            },
                            {
                                name: 'PITVN Google Drive',
                                url: 'https://www.google.com/url?q=https://drive.google.com/uc?id%3D1qk57BxCtBBiKgfewjmsAFZdXPKMq_3kZ%26export%3Ddownload&sa=D&source=editors&ust=1757870412378514&usg=AOvVaw3HOUNNj6FIl4u8Dlpjg2g7',
                                icon: 'fab fa-google-drive'
                            },
                            {
                                name: 'PITVN Onedrive',
                                url: 'https://www.google.com/url?q=https://glennsferryschools-my.sharepoint.com/:u:/g/personal/billgates_glennsferryschools_onmicrosoft_com/Ebv0a-ez7ANLnNypTCLsfm0BMrDhy_CpN5RVNcPydpx9KQ&sa=D&source=editors&ust=1757870412378176&usg=AOvVaw3GycxkIGBTIaxLOUBoFjyS',
                                icon: 'fa-solid fa-cloud'
                            },
                            {
                                name: 'PITVN Onedrive',
                                url: 'https://www.google.com/url?q=https://frsdev-my.sharepoint.com/:u:/g/personal/anthony_frsdev_onmicrosoft_com/EY5lVLOkf5VJqjW8qxH-yd0B5mmf0dPyIpBjGiiOnEikGA&sa=D&source=editors&ust=1757870412378286&usg=AOvVaw26vaDUZj1MGHi5_G2OW_xU',
                                icon: 'fa-solid fa-cloud'
                            }
                        ]
                    },
                    //Consumer (Home/SL/Pro/Edu/Workstations) 64bit
                    {
                        name: 'Consumer (Home/SL/Pro/Edu/Workstations)',
                        description: '64bit',
                        size: '5.1 GB',
                        links: [
                            {
                                name: 'PITVN Google Drive',
                                url: 'https://www.google.com/url?q=https://drive.google.com/uc?id%3D1WVu6PsyS-yY2LEbksKLdKXIUpqtflIpS%26export%3Ddownload&sa=D&source=editors&ust=1757870412379105&usg=AOvVaw1tbdbN9Q8VjpZmeCNn3GDJ',
                                icon: 'fab fa-google-drive'
                            },
                            {
                                name: 'PITVN Google Drive',
                                url: 'https://www.google.com/url?q=https://drive.google.com/uc?id%3D18DNtbg67pKRNrCBsVKuX3DGXOf5757X0%26export%3Ddownload&sa=D&source=editors&ust=1757870412379213&usg=AOvVaw1JoV5DUn-SFb-ZZtSPKRTJ',
                                icon: 'fab fa-google-drive'
                            },
                            {
                                name: 'PITVN Onedrive',
                                url: 'https://www.google.com/url?q=https://glennsferryschools-my.sharepoint.com/:u:/g/personal/billgates_glennsferryschools_onmicrosoft_com/EXiVrYb7E6VKnDcwiDYLp34Bg3fEAhDuS57uL4RmUftKyA&sa=D&source=editors&ust=1757870412378849&usg=AOvVaw18EahUECKwH09UnZpYotYv',
                                icon: 'fa-solid fa-cloud'
                            },
                            {
                                name: 'PITVN Onedrive',
                                url: 'https://www.google.com/url?q=https://frsdev-my.sharepoint.com/:u:/g/personal/anthony_frsdev_onmicrosoft_com/EaAMEj3uwZhLj8HkjUJHjoYBQlsU4YKsLa5YMEWJG74JdA&sa=D&source=editors&ust=1757870412378960&usg=AOvVaw0zg2xtGjUw9cypiahiWqr9',
                                icon: 'fa-solid fa-cloud'
                            }
                        ]
                    }
                ]
            },
            //------------------------------------- OK -------------
            //Windows 11 - VLSC - 24H2 Build 26100.2605 19 December 2024
            {
                name: 'Windows 11 - VLSC - 24H2 Build 26100.2605 19 December 2024',
                size: '5.1 GB',
                editions: [
                    //ADK 10.1.26100 x64/x86/arm64
                    {
                        name: 'ADK 10.1.26100 x64/x86/arm64',
                        description: '',
                        size: '5.1 GB',
                        links: [
                            {
                                name: 'PITVN Google Drive',
                                url: 'https://www.google.com/url?q=https://drive.google.com/uc?id%3D1yFgBCtlMcW7I_Hb-SwUqis5i7ybsBk3a%26export%3Ddownload&sa=D&source=editors&ust=1757870412379943&usg=AOvVaw3c1sK-OvHpdasv_PD3PTmj',
                                icon: 'fab fa-google-drive'
                            },
                            {
                                name: 'PITVN Google Drive',
                                url: 'https://www.google.com/url?q=https://drive.google.com/uc?id%3D1S7ofwgAkcTSAc4Dr9GDPH1yWzPkdTSoX%26export%3Ddownload&sa=D&source=editors&ust=1757870412380062&usg=AOvVaw0WWyu0yj-S3MUztT9yMpOG',
                                icon: 'fab fa-google-drive'
                            },
                            {
                                name: 'PITVN Onedrive',
                                url: 'https://www.google.com/url?q=https://glennsferryschools-my.sharepoint.com/:u:/g/personal/billgates_glennsferryschools_onmicrosoft_com/EccSrXCvZV1Nk8P-GaojgeIBlJAwr2C3iUI1T55gIiUuSA&sa=D&source=editors&ust=1757870412379780&usg=AOvVaw0V3JZ3L5mE5mKPgr7qsIyf',
                                icon: 'fa-solid fa-cloud'
                            },
                            {
                                name: 'PITVN Onedrive',
                                url: 'https://www.google.com/url?q=https://glennsferryschools-my.sharepoint.com/:u:/g/personal/ithelpdesk_glennsferryschools_onmicrosoft_com/EVvjlLaJ_zxGugXe8zVH_FsBGqG8-GdWnRbVtwzVMF1OTQ&sa=D&source=editors&ust=1757870412380539&usg=AOvVaw3qd8UOAj6tn6U8yxK6Y3ZS',
                                icon: 'fa-solid fa-cloud'
                            }
                        ]
                    },
                    //ADK 10.1.26100 PE add-on x64/x86/arm64
                    {
                        name: 'ADK 10.1.26100 PE add-on x64/x86/arm64',
                        description: '',
                        size: '5.1 GB',
                        links: [
                            {
                                name: 'PITVN Google Drive',
                                url: 'https://www.google.com/url?q=https://drive.google.com/uc?id%3D1q_iR9aHamJywDf8eM3iLJfWw8DT7mdS7%26export%3Ddownload&sa=D&source=editors&ust=1757870412380747&usg=AOvVaw1tw0M0yNlRP7va5pDgkRwG',
                                icon: 'fab fa-google-drive'
                            },
                            {
                                name: 'PITVN Google Drive',
                                url: 'https://www.google.com/url?q=https://drive.google.com/uc?id%3D1wmLS2m3YGvZELZNyh1DFWrW1DgYoe-fL%26export%3Ddownload&sa=D&source=editors&ust=1757870412380650&usg=AOvVaw2Ieb-ARdh9x3YG23QQDa2L',
                                icon: 'fab fa-google-drive'
                            },
                            {
                                name: 'PITVN Onedrive',
                                url: 'https://www.google.com/url?q=https://glennsferryschools-my.sharepoint.com/:u:/g/personal/billgates_glennsferryschools_onmicrosoft_com/EXfbrBu6dHBJgZSnI1fBp9cBvWo0x-cez1HyhTzOFye5Zw&sa=D&source=editors&ust=1757870412380419&usg=AOvVaw3e4jtXz1NFmLTjpBYC9Mf4',
                                icon: 'fa-solid fa-cloud'
                            },
                            {
                                name: 'PITVN Onedrive',
                                url: 'https://www.google.com/url?q=https://glennsferryschools-my.sharepoint.com/:u:/g/personal/ithelpdesk_glennsferryschools_onmicrosoft_com/EVvjlLaJ_zxGugXe8zVH_FsBGqG8-GdWnRbVtwzVMF1OTQ&sa=D&source=editors&ust=1757870412380539&usg=AOvVaw3qd8UOAj6tn6U8yxK6Y3ZS',
                                icon: 'fa-solid fa-cloud'
                            }
                        ]
                    },
                    //Business (Edu/Enterprise/Pro/Workstations) arm64
                    {
                        name: 'Business (Edu/Enterprise/Pro/Workstations)',
                        description: 'arm64',
                        size: '4.8 GB',
                        links: [
                            {
                                name: 'PITVN Google Drive',
                                url: 'https://www.google.com/url?q=https://drive.google.com/uc?id%3D1nVRspKe_ePZFbUzX36EFEkjq1y7ANekv%26export%3Ddownload&sa=D&source=editors&ust=1757870412382020&usg=AOvVaw3Y2ydXY0ku8VJDFdFSedIF',
                                icon: 'fab fa-google-drive'
                            },
                            {
                                name: 'PITVN Google Drive',
                                url: 'https://www.google.com/url?q=https://drive.google.com/uc?id%3D1adgZMm8iqeKTdHuxbNQkFx1dgSJRZWEd%26export%3Ddownload&sa=D&source=editors&ust=1757870412381909&usg=AOvVaw1FWXtgfswD3CWHGN20-GFG',
                                icon: 'fab fa-google-drive'
                            },
                            {
                                name: 'PITVN Onedrive',
                                url: 'https://www.google.com/url?q=https://glennsferryschools-my.sharepoint.com/:u:/g/personal/ithelpdesk_glennsferryschools_onmicrosoft_com/EY4VyTadfMFLsGtziFL8Jz8BIAMTNI3aP_rhmUzrYPz47g&sa=D&source=editors&ust=1757870412381805&usg=AOvVaw2bsYlCMJfMMFzL-NCDMcS2',
                                icon: 'fa-solid fa-cloud'
                            },
                            {
                                name: 'PITVN Onedrive',
                                url: 'https://www.google.com/url?q=https://glennsferryschools-my.sharepoint.com/:u:/g/personal/billgates_glennsferryschools_onmicrosoft_com/EX5TBEJcwhBGtWlnvHbzHXEBJRgqVBSeQSv63AuUQgMesw&sa=D&source=editors&ust=1757870412381700&usg=AOvVaw08il87HmFeyfRy0kYu6v7U',
                                icon: 'fa-solid fa-cloud'
                            }
                        ]
                    },
                    //Business (Edu/Enterprise/Pro/Workstations) 64bit
                    {
                        name: 'Business (Edu/Enterprise/Pro/Workstations)',
                        description: '64bit',
                        size: '5.0 GB',
                        links: [
                            {
                                name: 'PITVN Google Drive',
                                url: 'https://www.google.com/url?q=https://drive.google.com/uc?id%3D12uLjKezeMP-y_SqqTw19BxhBqztQCEGJ%26export%3Ddownload&sa=D&source=editors&ust=1757870412381377&usg=AOvVaw3iydVaJGyxB4wJ8th4QZb3',
                                icon: 'fab fa-google-drive'
                            },
                            {
                                name: 'PITVN Google Drive',
                                url: 'https://www.google.com/url?q=https://drive.google.com/uc?id%3D10TIpCG1w797SjF4OC2vW2PL1k-r58ZSB%26export%3Ddownload&sa=D&source=editors&ust=1757870412381278&usg=AOvVaw3cP6TTlfiSDErDLHgI-iQh',
                                icon: 'fab fa-google-drive'
                            },
                            {
                                name: 'PITVN Onedrive',
                                url: 'https://www.google.com/url?q=https://glennsferryschools-my.sharepoint.com/:u:/g/personal/ithelpdesk_glennsferryschools_onmicrosoft_com/EYpzW1ak5pBPrQ4qJVxA9BIBqUcvuJ-jWSPkPYaT-4mIdg&sa=D&source=editors&ust=1757870412381156&usg=AOvVaw1bHHih_7nrvQSKFJ1lhQfc',
                                icon: 'fa-solid fa-cloud'
                            },
                            {
                                name: 'PITVN Onedrive',
                                url: 'https://www.google.com/url?q=https://glennsferryschools-my.sharepoint.com/:u:/g/personal/billgates_glennsferryschools_onmicrosoft_com/EUkwcLYDXWFJiGGaAEhKb2EBH2bUcXr7i6mD2aYw109VeA&sa=D&source=editors&ust=1757870412381043&usg=AOvVaw2mhOcvmu_4AVYJ_zeA0P0l',
                                icon: 'fa-solid fa-cloud'
                            }

                        ]
                    },
                ]
            },
            //------------------------------------ OK -------------
            //Windows 11 - MSDN - 24H2 Build 26100.1742 01 October 2024
            {
                name: 'Windows 11 - MSDN - 24H2 Build 26100.1742 01 October 2024',
                size: '5.1 GB',
                editions: [
                    //Business (Edu/Enterprise/Pro/Workstations)
                    {
                        name: 'Business (Edu/Enterprise/Pro/Workstations)',
                        description: '64bit',
                        size: '5.1 GB',
                        links: [
                            {
                                name: 'PITVN Google Drive',
                                url: 'https://www.google.com/url?q=https://drive.google.com/uc?id%3D15MpZidBHyqzyyzG8j2aqJMEZrByouXxj%26export%3Ddownload&sa=D&source=editors&ust=1757870412382991&usg=AOvVaw2YX2fCVRDdqYPFNVc8Q7no',
                                icon: 'fab fa-google-drive'
                            },
                            {
                                name: 'PITVN Google Drive',
                                url: 'https://www.google.com/url?q=https://drive.google.com/uc?id%3D1gpLZiE1rGVIm9R66HfLu7f6mYoa3OonB%26export%3Ddownload&sa=D&source=editors&ust=1757870412382864&usg=AOvVaw3lbfi29Fe20sRZkSSCB0is',
                                icon: 'fab fa-google-drive'
                            },
                            {
                                name: 'PITVN Onedrive',
                                url: 'https://www.google.com/url?q=https://glennsferryschools-my.sharepoint.com/:u:/g/personal/billgates_glennsferryschools_onmicrosoft_com/EbOrIlXKZX5ItaUu_o3pl7ABd1iCA-xXEKFhduwjtOZx4Q&sa=D&source=editors&ust=1757870412382647&usg=AOvVaw0sR1D3jGD5xNh9YdF_ppym',
                                icon: 'fa-solid fa-cloud'
                            },
                            {
                                name: 'PITVN Onedrive',
                                url: 'https://www.google.com/url?q=https://glennsferryschools-my.sharepoint.com/:u:/g/personal/ithelpdesk_glennsferryschools_onmicrosoft_com/EWV5PegC-ApDjO_7CJrmDn4B_eHJHCAJcSPYOiwbP9476Q&sa=D&source=editors&ust=1757870412382761&usg=AOvVaw1eFRP01tvDp83aUf72s9QG',
                                icon: 'fa-solid fa-cloud'
                            }]
                    },
                    //Consumer (Home/SL/Pro/Edu/Workstations)
                    {
                        name: 'Consumer (Home/SL/Pro/Edu/Workstations)',
                        description: '',
                        size: '5.1 GB',
                        links: [
                            {
                                name: 'PITVN Google Drive',
                                url: 'https://www.google.com/url?q=https://drive.google.com/uc?id%3D1Vv4D2CXxbIsHAPxMSSJzH9oTfpbCYBe6%26export%3Ddownload&sa=D&source=editors&ust=1757870412383690&usg=AOvVaw3-kFqNajhZ1XWXn4HYO1NK',
                                icon: 'fab fa-google-drive'
                            },
                            {
                                name: 'PITVN Google Drive',
                                url: 'https://www.google.com/url?q=https://drive.google.com/uc?id%3D1CLnbvBWFkgfLaDHO4Pz3wAJuXOZYYIQd%26export%3Ddownload&sa=D&source=editors&ust=1757870412383788&usg=AOvVaw24tMc5BfRPBHMjOPl9LsjD',
                                icon: 'fab fa-google-drive'
                            },
                            {
                                name: 'PITVN Onedrive',
                                url: 'https://www.google.com/url?q=https://glennsferryschools-my.sharepoint.com/:u:/g/personal/ithelpdesk_glennsferryschools_onmicrosoft_com/ER4Ykgu_-llAgsas3OtRqooB2BZWVvMo5BuIEkHMwUcQ1w&sa=D&source=editors&ust=1757870412383583&usg=AOvVaw1QupPeTTCXH9u2IZWZe1zX',
                                icon: 'fa-solid fa-cloud'
                            },
                            {
                                name: 'PITVN Onedrive',
                                url: 'https://www.google.com/url?q=https://glennsferryschools-my.sharepoint.com/:u:/g/personal/billgates_glennsferryschools_onmicrosoft_com/EQatHJ6ojMBKkdm4ErIQ85oBo9zgOzZv22_V7gdCiX49cA&sa=D&source=editors&ust=1757870412383446&usg=AOvVaw0lv2mZT-776QCjwOkV6k1u',
                                icon: 'fa-solid fa-cloud'
                            }
                        ]
                    },
                    //Enterprise LTSC 2024
                    {
                        name: 'Enterprise LTSC 2024',
                        description: '64bit',
                        size: '4.8 GB',
                        links: [{
                            name: 'PITVN Google Drive',
                            url: 'https://www.google.com/url?q=https://drive.google.com/uc?id%3D19c_Ys7Y49-AhgNvZCLtS0z-iif95G-Lf%26export%3Ddownload&sa=D&source=editors&ust=1757870412384371&usg=AOvVaw3j1gK78_puNWjdBMi_XbYa',
                            icon: 'fab fa-google-drive'
                        },
                        {
                            name: 'PITVN Google Drive',
                            url: 'https://www.google.com/url?q=https://drive.google.com/uc?id%3D1tL86Jt1xazHx1-7EQ0JspebhTu3FAm8Y%26export%3Ddownload&sa=D&source=editors&ust=1757870412384274&usg=AOvVaw120Qvg3kUIFjfcR5k07CML',
                            icon: 'fab fa-google-drive'
                        },
                        {
                            name: 'PITVN Onedrive',
                            url: 'https://www.google.com/url?q=https://glennsferryschools-my.sharepoint.com/:u:/g/personal/ithelpdesk_glennsferryschools_onmicrosoft_com/EeywDW_m9wpLpE9fybbwx6MBA-nBuY62MSWrRBP2QGU7FA&sa=D&source=editors&ust=1757870412384177&usg=AOvVaw3jH0UGzbPrXySILiigjOuA',
                            icon: 'fa-solid fa-cloud'
                        },
                        {
                            name: 'PITVN Onedrive',
                            url: 'https://www.google.com/url?q=https://glennsferryschools-my.sharepoint.com/:u:/g/personal/billgates_glennsferryschools_onmicrosoft_com/EYDr2m__igFGg9MmWaPuUlIBO4wGUZkkNxE0wWMwpe9Pug&sa=D&source=editors&ust=1757870412384070&usg=AOvVaw2zS3RYQIRHCIpS-066zl_H',
                            icon: 'fa-solid fa-cloud'
                        }]
                    },
                    //IoT Enterprise LTSC 2024
                    {
                        name: 'IoT Enterprise LTSC 2024',
                        description: '64bit',
                        size: '4.8 GB',
                        links: [{
                            name: 'PITVN Google Drive',
                            url: 'https://www.google.com/url?q=https://drive.google.com/uc?id%3D1LrbIgdP-NJN_sATR0qqFnEJ6aNujDjg8%26export%3Ddownload&sa=D&source=editors&ust=1757870412384781&usg=AOvVaw2AFW1GsP0tA-PSYFd3n33d',
                            icon: 'fab fa-google-drive'
                        },
                        {
                            name: 'PITVN Google Drive',
                            url: 'https://www.google.com/url?q=https://drive.google.com/uc?id%3D1AwTI1r6ofpc5AATa9Mc9CIOdas6ZtO8w%26export%3Ddownload&sa=D&source=editors&ust=1757870412384844&usg=AOvVaw19auFH4XIYfpGTXj_oFUbg',
                            icon: 'fab fa-google-drive'
                        },
                        {
                            name: 'PITVN Onedrive',
                            url: 'https://www.google.com/url?q=https://glennsferryschools-my.sharepoint.com/:u:/g/personal/billgates_glennsferryschools_onmicrosoft_com/Eb-_K9ZC8wBDl1-ssepaxsYBTDQVVKsWBsm0ertXe1eUPw&sa=D&source=editors&ust=1757870412384639&usg=AOvVaw1PwAce6YbwSNosjlsCWxSM',
                            icon: 'fa-solid fa-cloud'
                        },
                        {
                            name: 'PITVN Onedrive',
                            url: 'https://www.google.com/url?q=https://glennsferryschools-my.sharepoint.com/:u:/g/personal/ithelpdesk_glennsferryschools_onmicrosoft_com/EbxTVT_TLw5Dk8-vJgc57UYBW35ZBiUZ7VqDEL0P5UyAWQ&sa=D&source=editors&ust=1757870412384698&usg=AOvVaw3Hd6ioABFFDYxHRnFi5Bs5',
                            icon: 'fa-solid fa-cloud'
                        },
                        ]
                    },
                    //IoT Enterprise LTSC 24H2
                    {
                        name: 'IoT Enterprise LTSC 24H2',
                        description: '64bit',
                        size: '4.8 GB',
                        links: [{
                            name: 'PITVN Google Drive',
                            url: 'https://www.google.com/url?q=https://drive.google.com/uc?id%3D1uuBYleWTcF_VhI16SJ5g_4298eM1nsti%26export%3Ddownload&sa=D&source=editors&ust=1757870412385220&usg=AOvVaw04vuMroNDRreZZ0-5WbIHC',
                            icon: 'fab fa-google-drive'
                        },
                        {
                            name: 'PITVN Google Drive',
                            url: 'https://www.google.com/url?q=https://drive.google.com/uc?id%3D1sZzJhwiwDoEIDvsSZ5IQihNSERkSDhJA%26export%3Ddownload&sa=D&source=editors&ust=1757870412385165&usg=AOvVaw07YgG8sBMpnQ7cXPOJJmMZ',
                            icon: 'fab fa-google-drive'
                        },
                        {
                            name: 'PITVN Onedrive',
                            url: 'https://www.google.com/url?q=https://glennsferryschools-my.sharepoint.com/:u:/g/personal/billgates_glennsferryschools_onmicrosoft_com/ETz7G3-h4BJBuS4lpKQN3swBdnKyHsJiiEATOaPsLO80AQ&sa=D&source=editors&ust=1757870412385011&usg=AOvVaw3c9DYl1xNflXtv1iFLRqv3',
                            icon: 'fa-solid fa-cloud'
                        },
                        {
                            name: 'PITVN Onedrive',
                            url: 'https://www.google.com/url?q=https://glennsferryschools-my.sharepoint.com/:u:/g/personal/ithelpdesk_glennsferryschools_onmicrosoft_com/ETAwEUhRIbNOqtXD0JJ1sfkBH69xtQs5MX_IZqTPjWaO_w&sa=D&source=editors&ust=1757870412385102&usg=AOvVaw3TQvziwQXWG15y4znpAsoN',
                            icon: 'fa-solid fa-cloud'
                        }]
                    },

                ]
            },
            //---------------------------------- OK -------------------
            //Windows 11 - MSDN - 23H2 Build 22631.5768 - 19 August 2025
            {
                name: 'Windows 11 - MSDN - 23H2 Build 22631.5768 - 19 August 2025',
                size: '5.1 GB',
                editions: [
                    // Business(Edu / Enterprise / Pro / Workstations)
                    {
                        name: 'Business(Edu / Enterprise / Pro / Workstations)',
                        description: '64bit',
                        size: '5.1 GB',
                        links: [
                            {
                                name: 'PITVN Google Drive',
                                url: 'https://www.google.com/url?q=https://drive.google.com/uc?id%3D1u4_qlXoY4kUnBz_LMS6IJ7jle0KGchiC%26export%3Ddownload&sa=D&source=editors&ust=1757854453317672&usg=AOvVaw07FDXied4rSr6uPOcjS-iF',
                                icon: 'fab fa-google-drive'
                            },
                            {
                                name: 'PITVN Google Drive',
                                url: 'https://www.google.com/url?q=https://drive.google.com/uc?id%3D1E71Opa1h-p5eJX7So27KcHwLwz1NWJJZ%26export%3Ddownload&sa=D&source=editors&ust=1757854453317615&usg=AOvVaw3j6Pfl9OacCsNFY3g3M1aG',
                                icon: 'fab fa-google-drive'
                            },
                            {
                                name: 'PITVN Onedrive',
                                url: 'https://www.google.com/url?q=https://glennsferryschools-my.sharepoint.com/:u:/g/personal/billgates_glennsferryschools_onmicrosoft_com/EdIMafWWQodAsMP8tTclVb8B7oW9z7eCIR09ruGdPequ9A&sa=D&source=editors&ust=1757854453317469&usg=AOvVaw0v977bDTzdyJijCXC2Rwvz',
                                icon: 'fa-solid fa-cloud'
                            },
                            {
                                name: 'PITVN Onedrive',
                                url: 'https://www.google.com/url?q=https://frsdev-my.sharepoint.com/:u:/g/personal/anthony_frsdev_onmicrosoft_com/EfarC2mMhqJEtB2yeM3kBwQBPDlTqEiuegTt2FTBNfr68w&sa=D&source=editors&ust=1757854453317548&usg=AOvVaw2BGfoEfVqN4IM-YJjZXP7q',
                                icon: 'fa-solid fa-cloud'
                            }]
                    },
                    // Consumer(Home / SL / Pro / Edu / Workstations)
                    {
                        name: ' Consumer(Home / SL / Pro / Edu / Workstations)',
                        description: '64bit',
                        size: '5.1 GB',
                        links: [
                            {
                                name: 'PITVN Google Drive',
                                url: 'https://www.google.com/url?q=https://drive.google.com/uc?id%3D1vIyya4ovn_L6xpvBPHcfNz6_zwzQwrsw%26export%3Ddownload&sa=D&source=editors&ust=1757854453318020&usg=AOvVaw3mm3dvIlP3vsEsnlRL71lw',
                                icon: 'fab fa-google-drive'
                            },
                            {
                                name: 'PITVN Google Drive',
                                url: 'https://www.google.com/url?q=https://drive.google.com/uc?id%3D1WkCrAfg0Wm64V6pDx2_MZUflb4te43f7%26export%3Ddownload&sa=D&source=editors&ust=1757854453317972&usg=AOvVaw0ATtjMC2Om5H8im7nduYUW',
                                icon: 'fab fa-google-drive'
                            },
                            {
                                name: 'PITVN Onedrive',
                                url: 'https://www.google.com/url?q=https://frsdev-my.sharepoint.com/:u:/g/personal/anthony_frsdev_onmicrosoft_com/EdGSPExOxbRJoplDfqp2uLsBC0OSW1O6BYwt7ssOUoAkMw&sa=D&source=editors&ust=1757854453317921&usg=AOvVaw2BT4_tzATfKFto_lwjO6Vn',
                                icon: 'fa-solid fa-cloud'
                            },
                            {
                                name: 'PITVN Onedrive',
                                url: 'https://www.google.com/url?q=https://glennsferryschools-my.sharepoint.com/:u:/g/personal/billgates_glennsferryschools_onmicrosoft_com/EWVDzi0n92FCtBY8eHlPWBYBnczcB6EOLZgef7kV1nIbmQ&sa=D&source=editors&ust=1757854453317869&usg=AOvVaw0qNsu5DIMHn3I4y_t_6uuI',
                                icon: 'fa-solid fa-cloud'
                            }]
                    },

                ]
            },
            //---------------------------------- OK -------------------
            //Windows 11 - MSDN - 22H2 Build 22621.4169 - 17 September 2024
            {
                name: 'Windows 11 - MSDN - 22H2 Build 22621.4169 - 17 September 2024',
                size: '5.1 GB',
                editions: [
                    // Business(Edu / Enterprise / Pro / Workstations)
                    {
                        name: 'Business(Edu / Enterprise / Pro / Workstations)',
                        description: '64bit',
                        size: '5.1 GB',
                        links: [
                            {
                                name: 'PITVN Google Drive',
                                url: 'https://www.google.com/url?q=https://drive.google.com/uc?id%3D1YjX2btkttIqGwN3n83KpSgynzTzSeVyd%26export%3Ddownload&sa=D&source=editors&ust=1757854453319091&usg=AOvVaw0EJo55LqskhXvDg96wweRM',
                                icon: 'fab fa-google-drive'
                            },
                            {
                                name: 'PITVN Google Drive',
                                url: 'https://www.google.com/url?q=https://drive.google.com/uc?id%3D1V6c-tl4BY8zHlIMSbHbScpmrwb48uJYN%26export%3Ddownload&sa=D&source=editors&ust=1757854453319022&usg=AOvVaw2sAdg0lmkDGw2O0Vui9yhI',
                                icon: 'fab fa-google-drive'
                            },
                            {
                                name: 'PITVN Onedrive',
                                url: 'https://www.google.com/url?q=https://glennsferryschools-my.sharepoint.com/:u:/g/personal/ithelpdesk_glennsferryschools_onmicrosoft_com/EcRis3dH6S1EkKcu07OHrK0Bensal3lsHyyaYEjElw56oA&sa=D&source=editors&ust=1757854453318947&usg=AOvVaw2xvFeqT1wyfRtSTLTqQuQm',
                                icon: 'fa-solid fa-cloud'
                            },
                            {
                                name: 'PITVN Onedrive',
                                url: 'https://www.google.com/url?q=https://glennsferryschools-my.sharepoint.com/:u:/g/personal/billgates_glennsferryschools_onmicrosoft_com/EQc63zcnPCxLnvj0B_SySB0B39QR_NBThpLak-Ny4YtoQQ&sa=D&source=editors&ust=1757854453318887&usg=AOvVaw2wuDLEmrVSwED-I7vyezvM',
                                icon: 'fa-solid fa-cloud'
                            }]
                    },
                    // Consumer(Home / SL / Pro / Edu / Workstations)
                    {
                        name: ' Consumer(Home / SL / Pro / Edu / Workstations)',
                        description: '64bit',
                        size: '5.1 GB',
                        links: [
                            {
                                name: 'PITVN Google Drive',
                                url: 'https://www.google.com/url?q=https://drive.google.com/uc?id%3D1zoIl2Vdu5FQc9_tNtNipGW4T2oxHmh3w%26export%3Ddownload&sa=D&source=editors&ust=1757854453319440&usg=AOvVaw1uUZ6Yvz4iuJf5u1mC3S7-',
                                icon: 'fab fa-google-drive'
                            },
                            {
                                name: 'PITVN Google Drive',
                                url: 'https://www.google.com/url?q=https://drive.google.com/uc?id%3D1WIrjp7xYWmZ0b_maJCFxTlvJs2wAnWwm%26export%3Ddownload&sa=D&source=editors&ust=1757854453319396&usg=AOvVaw0EYRIiob5kVQppttXZ45Sq',
                                icon: 'fab fa-google-drive'
                            },
                            {
                                name: 'PITVN Onedrive',
                                url: 'https://www.google.com/url?q=https://glennsferryschools-my.sharepoint.com/:u:/g/personal/ithelpdesk_glennsferryschools_onmicrosoft_com/EW8ZPT28rLFOt7kmj3N4mLkBGwmU0ywcuAvwtL_RgzO63w&sa=D&source=editors&ust=1757854453319346&usg=AOvVaw2Wv7_weITKwSUkL-id2J0n',
                                icon: 'fa-solid fa-cloud'
                            },
                            {
                                name: 'PITVN Onedrive',
                                url: 'https://www.google.com/url?q=https://glennsferryschools-my.sharepoint.com/:u:/g/personal/billgates_glennsferryschools_onmicrosoft_com/EeFN-LBTbgJGlNPpZ0DYa-kBQeMDM4uAYpITMH8FANglnA&sa=D&source=editors&ust=1757854453319293&usg=AOvVaw3kq1JqcMo8ObTHI1FkFvqv',
                                icon: 'fa-solid fa-cloud'
                            }]
                    },

                ]
            },
            //---------------------------------- OK -------------------
            //Windows 11 - MSDN - 21H2 Build 22000.2416 - 19 September 2023
            {
                name: 'Windows 11 - MSDN - 21H2 Build 22000.2416 - 19 September 2023',
                size: '5.1 GB',
                editions: [
                    // Business(Edu / Enterprise / Pro / Workstations)
                    {
                        name: 'Business(Edu / Enterprise / Pro / Workstations)',
                        description: '64bit',
                        size: '5.1 GB',
                        links: [
                            {
                                name: 'PITVN Google Drive',
                                url: 'https://www.google.com/url?q=https://drive.google.com/uc?id%3D1pBdYhikqnmXRCIFU6ZJOMjfF2HJ_oCnb%26export%3Ddownload&sa=D&source=editors&ust=1757854453320439&usg=AOvVaw1Nxgo4i11C2iTiaSPhJsP2',
                                icon: 'fab fa-google-drive'
                            },
                            {
                                name: 'PITVN Google Drive',
                                url: 'https://www.google.com/url?q=https://drive.google.com/uc?id%3D1ylcTQtVcLgswUu-EyMVRQL62RsqYfDZU%26export%3Ddownload&sa=D&source=editors&ust=1757854453320391&usg=AOvVaw2gtDphxGPY0OsTTYykFGOT',
                                icon: 'fab fa-google-drive'
                            },
                            {
                                name: 'PITVN Onedrive',
                                url: 'https://www.google.com/url?q=https://glennsferryschools-my.sharepoint.com/:u:/g/personal/ithelpdesk_glennsferryschools_onmicrosoft_com/EUkQHNvcAMJJvHOZFPXj3JABgdK5o5fgru0q0g4MIPHTOg&sa=D&source=editors&ust=1757854453320272&usg=AOvVaw1-T5qUJ7ZA61Rdq0_WVGXa',
                                icon: 'fa-solid fa-cloud'
                            },
                            {
                                name: 'PITVN Onedrive',
                                url: 'https://www.google.com/url?q=https://glennsferryschools-my.sharepoint.com/:u:/g/personal/billgates_glennsferryschools_onmicrosoft_com/ER2-N_IO49hDjewRCVUENxgBUmkv7wc3soAL0SWP1Kl0zw&sa=D&source=editors&ust=1757854453320196&usg=AOvVaw3b-3TLFkMGgge4zZ5Jbwx7',
                                icon: 'fa-solid fa-cloud'
                            }]
                    },
                    // Consumer(Home / SL / Pro / Edu / Workstations)
                    {
                        name: ' Consumer(Home / SL / Pro / Edu / Workstations)',
                        description: '64bit',
                        size: '5.1 GB',
                        links: [
                            {
                                name: 'PITVN Google Drive',
                                url: 'https://www.google.com/url?q=https://drive.google.com/uc?id%3D10AV3REjY6ojX7_XmCxQrd_3fnFNz28HS%26export%3Ddownload&sa=D&source=editors&ust=1757854453320833&usg=AOvVaw1k1PwjAo80GN3uBHB_G9KT',
                                icon: 'fab fa-google-drive'
                            },
                            {
                                name: 'PITVN Google Drive',
                                url: 'https://www.google.com/url?q=https://drive.google.com/uc?id%3D1fduansBljRaNevAyHPdfezNvVWIVkH-s%26export%3Ddownload&sa=D&source=editors&ust=1757854453320788&usg=AOvVaw2Jez56MOQ97NTQVoxLhT83',
                                icon: 'fab fa-google-drive'
                            },
                            {
                                name: 'PITVN Onedrive',
                                url: 'https://www.google.com/url?q=https://glennsferryschools-my.sharepoint.com/:u:/g/personal/ithelpdesk_glennsferryschools_onmicrosoft_com/EW5j5wgV8p5Lu_d1t-rLFrUBBkxaHNJhotF6LApeyK-2Zw&sa=D&source=editors&ust=1757854453320735&usg=AOvVaw34xaw3PMFMGd0g8peT0H3a',
                                icon: 'fa-solid fa-cloud'
                            },
                            {
                                name: 'PITVN Onedrive',
                                url: 'https://www.google.com/url?q=https://glennsferryschools-my.sharepoint.com/:u:/g/personal/billgates_glennsferryschools_onmicrosoft_com/EVwigOAFWAxJlDJlD1U09rcBtcu0id24gtwnsj8TrLc-KA&sa=D&source=editors&ust=1757854453320668&usg=AOvVaw31uERAcflqMCYDRKb8YJeb',
                                icon: 'fa-solid fa-cloud'
                            }]
                    },

                ]
            }
        ]
    },

    //____________________________END_WINDOW_11____________________________
    //____________________________WINDOW_10________________________________
    {
        id: 'windows10',
        name: 'Windows 10',
        description: 'Hệ điều hành Windows 10 từ PITVN Community Resources',
        category: 'windows',
        icon: 'fab fa-windows',
        versions: [
            //Windows 10 Version 22H2 MSDN Build 19045.6216 19 August 2025
            {
                name: 'Version 22H2 MSDN Build 19045.6216 19 August 2025',
                size: '5.2 GB',
                editions: [
                    //Business (Edu/Enterprise/Pro/Workstations) 64bit
                    {
                        name: 'Business (Edu/Enterprise/Pro/Workstations)',
                        description: '64bit',
                        size: '4.8 GB',
                        links: [
                            {
                                name: 'PITVN Google Drive',
                                url: 'https://www.google.com/url?q=https://drive.google.com/uc?id%3D19aKZO1VS1ROBtBHdAHbb7gtLs7rdC2OU%26export%3Ddownload&sa=D&source=editors&ust=1757854453321934&usg=AOvVaw2lUKA9wRyZOu8Kh0RRNU9X',
                                icon: 'fab fa-google-drive'
                            },
                            {
                                name: 'PITVN Google Drive',
                                url: 'https://www.google.com/url?q=https://drive.google.com/uc?id%3D13vT-9Cd7y221lzUJMg3vqUHD3M9QKBpo%26export%3Ddownload&sa=D&source=editors&ust=1757854453321873&usg=AOvVaw0ifMo2Q0qZ4WtvaaoG9y8L',
                                icon: 'fab fa-google-drive'
                            },
                            {
                                name: 'PITVN Onedrive',
                                url: 'https://www.google.com/url?q=https://glennsferryschools-my.sharepoint.com/:u:/g/personal/billgates_glennsferryschools_onmicrosoft_com/EU07M1p4KKRDlHCE1lkpeB0BN9qcvQ7Hxzf5HncZMgYwYA&sa=D&source=editors&ust=1757854453321751&usg=AOvVaw2d0LfUSqZIqfRXmli2wlwI',
                                icon: 'fa-solid fa-cloud'
                            },
                            {
                                name: 'PITVN Onedrive',
                                url: 'https://www.google.com/url?q=https://frsdev-my.sharepoint.com/:u:/g/personal/anthony_frsdev_onmicrosoft_com/EZr7ZQBAmVxEupxrzwiL4acBYejVBj_5fSOawLX4p3Kfvg&sa=D&source=editors&ust=1757854453321812&usg=AOvVaw37BpghZA3c1-stYqSaTHVn',
                                icon: 'fa-solid fa-cloud'
                            }
                        ]
                    },
                    //Business (Edu/Enterprise/Pro/Workstations) 32bit
                    {
                        name: 'Business (Edu/Enterprise/Pro/Workstations)',
                        description: '32bit',
                        size: '4.8 GB',
                        links: [
                            {
                                name: 'PITVN Google Drive',
                                url: 'https://www.google.com/url?q=https://drive.google.com/uc?id%3D1mEMYckJg8s8vFSHZ2uuSVZxbY6n7lN1T%26export%3Ddownload&sa=D&source=editors&ust=1757854453322328&usg=AOvVaw3XzgOJhFVQro3iusCY_xei',
                                icon: 'fab fa-google-drive'
                            },
                            {
                                name: 'PITVN Google Drive',
                                url: 'https://www.google.com/url?q=https://drive.google.com/uc?id%3D1YAqlPo7omG1G9QAe5UeJbjGrkXWQAUf2%26export%3Ddownload&sa=D&source=editors&ust=1757854453322279&usg=AOvVaw22BGYRa8JyrMByy_sWPLhk',
                                icon: 'fab fa-google-drive'
                            },
                            {
                                name: 'PITVN Onedrive',
                                url: 'https://www.google.com/url?q=https://frsdev-my.sharepoint.com/:u:/g/personal/anthony_frsdev_onmicrosoft_com/EfnlwG4fJ4FFnCJjtkFie14B6pYBovVmV7dkbhLNl_UU3Q&sa=D&source=editors&ust=1757854453322231&usg=AOvVaw3wQa0fomZlZ8ykjgGRHFEO',
                                icon: 'fa-solid fa-cloud'
                            },
                            {
                                name: 'PITVN Onedrive',
                                url: 'https://www.google.com/url?q=https://glennsferryschools-my.sharepoint.com/:u:/g/personal/billgates_glennsferryschools_onmicrosoft_com/ERh4gX2BrWNAnvSQ9S-P_AQBJisC7aLbeyG4Fn3x-l_OnA&sa=D&source=editors&ust=1757854453322173&usg=AOvVaw1HoDDCenj_KHWfCSZwMQ3k',
                                icon: 'fa-solid fa-cloud'
                            }
                        ]
                    },
                    //Consumer (Home/SL/Pro/Edu/Workstations) 64bit
                    {
                        name: 'Consumer (Home/SL/Pro/Edu/Workstations)',
                        description: '64bit',
                        size: '4.8 GB',
                        links: [
                            {
                                name: 'PITVN Google Drive',
                                url: 'https://www.google.com/url?q=https://drive.google.com/uc?id%3D1om2OfiNmkS14eVbxLLNIGsQR2Ae-TBC3%26export%3Ddownload&sa=D&source=editors&ust=1757854453322665&usg=AOvVaw2FdNfyR4kwKD7TsKtc2SbX',
                                icon: 'fab fa-google-drive'
                            },
                            {
                                name: 'PITVN Google Drive',
                                url: 'https://www.google.com/url?q=https://drive.google.com/uc?id%3D1DEkMTVtTlgJVRh9D7Eh_5ja2NrmtlwC-%26export%3Ddownload&sa=D&source=editors&ust=1757854453322610&usg=AOvVaw0ls6ztAQUuQyKm8XRnx4HW',
                                icon: 'fab fa-google-drive'
                            },
                            {
                                name: 'PITVN Onedrive',
                                url: 'https://www.google.com/url?q=https://frsdev-my.sharepoint.com/:u:/g/personal/anthony_frsdev_onmicrosoft_com/EWuZXqn003hMlK6SVzALInMBk8dCCWb4hdGsKICnGIP59Q&sa=D&source=editors&ust=1757854453322558&usg=AOvVaw0x-qtvIbyStDS68R1DJhH_',
                                icon: 'fa-solid fa-cloud'
                            },
                            {
                                name: 'PITVN Onedrive',
                                url: 'https://www.google.com/url?q=https://glennsferryschools-my.sharepoint.com/:u:/g/personal/billgates_glennsferryschools_onmicrosoft_com/Eb8DHUghJgdMsyHs28s_PjYBTDT9xqUPkbVig0p7yUF-Tw&sa=D&source=editors&ust=1757854453322501&usg=AOvVaw028chYH_6VGXVhsRXkxQCY',
                                icon: 'fa-solid fa-cloud'
                            }
                        ]
                    },
                    //Consumer (Home/SL/Pro/Edu/Workstations) 32bit
                    {
                        name: 'Consumer (Home/SL/Pro/Edu/Workstations)',
                        description: '32bit',
                        size: '4.8 GB',
                        links: [
                            {
                                name: 'PITVN Google Drive',
                                url: 'https://www.google.com/url?q=https://drive.google.com/uc?id%3D1EkPODOvZo34-d3DY87qqnRzfLA8LcS2V%26export%3Ddownload&sa=D&source=editors&ust=1757854453322993&usg=AOvVaw2sueWH-QFrvg5SZ9CKzaQH',
                                icon: 'fab fa-google-drive'
                            },
                            {
                                name: 'PITVN Google Drive',
                                url: 'https://www.google.com/url?q=https://drive.google.com/uc?id%3D1dUNQunPKJ4CWihlD5agyDAYicibXASun%26export%3Ddownload&sa=D&source=editors&ust=1757854453322943&usg=AOvVaw2VjczRS63dYou1t3MCUYuZ',
                                icon: 'fab fa-google-drive'
                            },
                            {
                                name: 'PITVN Onedrive',
                                url: 'https://www.google.com/url?q=https://frsdev-my.sharepoint.com/:u:/g/personal/anthony_frsdev_onmicrosoft_com/EX94U-ZfbphAomlP2pqP9ywBHa61G85mxHocogslskOBXg&sa=D&source=editors&ust=1757854453322896&usg=AOvVaw1f6AewkX6jmG_-qzZ6Gr0J',
                                icon: 'fa-solid fa-cloud'
                            },
                            {
                                name: 'PITVN Onedrive',
                                url: 'https://www.google.com/url?q=https://glennsferryschools-my.sharepoint.com/:u:/g/personal/billgates_glennsferryschools_onmicrosoft_com/EVwMKKIfMAZGtFlCx9Q2cTIBAjV7WLFq4em96dk5L6VKYw&sa=D&source=editors&ust=1757854453322842&usg=AOvVaw1ZFvuQXjHB7jIm19Ank6sa',
                                icon: 'fa-solid fa-cloud'
                            }
                        ]
                    },
                ]
            },
            //Windows 10 Version 22H2 MSDN Build 19045.2006 18 October 2022
            {
                name: 'Windows 10 Version 22H2 MSDN Build 19045.2006 18 October 2022',
                size: '5.2 GB',
                editions: [
                    //Business (Edu/Enterprise/Pro/Workstations) 64bit
                    {
                        name: 'Business (Edu/Enterprise/Pro/Workstations)',
                        description: '64bit',
                        size: '4.8 GB',
                        links: [
                            {
                                name: 'PITVN Google Drive',
                                url: 'https://www.google.com/url?q=https://drive.google.com/file/d/1-MR-7ly_7QS7jwFOjQzkRhAlf72VyzuA/view?usp%3Ddrivesdk&sa=D&source=editors&ust=1757854453323655&usg=AOvVaw03g82TnuD_dHkBmeQZo71X',
                                icon: 'fab fa-google-drive'
                            },
                            {
                                name: 'PITVN Google Drive',
                                url: 'https://www.google.com/url?q=https://drive.google.com/file/d/1zi7vpop5VzGgBY2M3ITzzeZIKn2X116k/view?usp%3Ddrivesdk&sa=D&source=editors&ust=1757854453323600&usg=AOvVaw0aVfQBTdjU4psu_7HVTk_b',
                                icon: 'fab fa-google-drive'
                            },
                            {
                                name: 'PITVN Onedrive',
                                url: 'https://www.google.com/url?q=https://glennsferryschools-my.sharepoint.com/:u:/g/personal/ithelpdesk_glennsferryschools_onmicrosoft_com/EROUKaGg3c9Lpn-UyjLwuyYBHL04ACHuxh8JuYrZXWu7Bw&sa=D&source=editors&ust=1757854453323541&usg=AOvVaw2elrMCGOUzPBZcp193cU4G',
                                icon: 'fa-solid fa-cloud'
                            },
                            {
                                name: 'PITVN Onedrive',
                                url: 'https://www.google.com/url?q=https://glennsferryschools-my.sharepoint.com/:u:/g/personal/billgates_glennsferryschools_onmicrosoft_com/Ef_ruZTTgWhMnAOgFKQrqm4BN6wZtbO1zZChyUauq-XAhA&sa=D&source=editors&ust=1757854453323480&usg=AOvVaw1MpLPRHX_N6F3BW4gP19tx',
                                icon: 'fa-solid fa-cloud'
                            }
                        ]
                    },
                    //Business (Edu/Enterprise/Pro/Workstations) 32bit
                    {
                        name: 'Business (Edu/Enterprise/Pro/Workstations)',
                        description: '32bit',
                        size: '4.8 GB',
                        links: [
                            {
                                name: 'PITVN Google Drive',
                                url: 'https://www.google.com/url?q=https://drive.google.com/file/d/1imsBXK42t0dWcq0_DNKb_4rs86R3n7O2/view?usp%3Ddrivesdk&sa=D&source=editors&ust=1757854453324001&usg=AOvVaw1ri4Pb3vm6NwVLuOJc_39L',
                                icon: 'fab fa-google-drive'
                            },
                            {
                                name: 'PITVN Google Drive',
                                url: 'https://www.google.com/url?q=https://drive.google.com/file/d/1hVTIvbkgbla42d3VCKOyemPE05Q51LTq/view?usp%3Ddrivesdk&sa=D&source=editors&ust=1757854453323946&usg=AOvVaw16pS1p1YOBOctSLx3BDY3p',
                                icon: 'fab fa-google-drive'
                            },
                            {
                                name: 'PITVN Onedrive',
                                url: 'https://www.google.com/url?q=https://glennsferryschools-my.sharepoint.com/:u:/g/personal/ithelpdesk_glennsferryschools_onmicrosoft_com/EYFi5rkMeoNGm33gJ5ZsY4UB-KovENvnwEak_XGuPSwtbw&sa=D&source=editors&ust=1757854453323899&usg=AOvVaw0AB4y1fEqd3fTQhN4Np6Gj',
                                icon: 'fa-solid fa-cloud'
                            },
                            {
                                name: 'PITVN Onedrive',
                                url: 'https://www.google.com/url?q=https://glennsferryschools-my.sharepoint.com/:u:/g/personal/billgates_glennsferryschools_onmicrosoft_com/EfdtyzzPKzRHkyZePbXr2EsBaSqYO_kv81ZOJDQihaQx0w&sa=D&source=editors&ust=1757854453323845&usg=AOvVaw2-oDvwTjkk9YHMss1D1hEw',
                                icon: 'fa-solid fa-cloud'
                            }
                        ]
                    },
                    //Consumer (Home/SL/Pro/Edu/Workstations) 64bit
                    {
                        name: 'Consumer (Home/SL/Pro/Edu/Workstations)',
                        description: '64bit',
                        size: '4.8 GB',
                        links: [
                            {
                                name: 'PITVN Google Drive',
                                url: 'https://www.google.com/url?q=https://drive.google.com/file/d/1YdFsfCjzOt8E3cKMe6_zmcg78GghpXK3/view?usp%3Ddrivesdk&sa=D&source=editors&ust=1757854453324318&usg=AOvVaw3kJq68rrvZtop2PM9eAh1G',
                                icon: 'fab fa-google-drive'
                            },
                            {
                                name: 'PITVN Google Drive',
                                url: 'https://www.google.com/url?q=https://drive.google.com/file/d/1mKMJS1cRkcaj02uUTKyBTux98rSyEoeS/view?usp%3Ddrivesdk&sa=D&source=editors&ust=1757854453324272&usg=AOvVaw0D6LwUp4HwLOAKewn0p0rf',
                                icon: 'fab fa-google-drive'
                            },
                            {
                                name: 'PITVN Onedrive',
                                url: 'https://www.google.com/url?q=https://glennsferryschools-my.sharepoint.com/:u:/g/personal/ithelpdesk_glennsferryschools_onmicrosoft_com/EbGfsqW5TYJKhOQ2Rtn6TFYBSyBBttbgatdJ1ipQDWd7XA&sa=D&source=editors&ust=1757854453324223&usg=AOvVaw0lP49Wb0x-EcG84WuzhnvO',
                                icon: 'fa-solid fa-cloud'
                            },
                            {
                                name: 'PITVN Onedrive',
                                url: 'https://www.google.com/url?q=https://glennsferryschools-my.sharepoint.com/:u:/g/personal/billgates_glennsferryschools_onmicrosoft_com/EUzDcz-D4CdNjKfg558Uim4BCnE7xYFff_t84BHShOEL_Q&sa=D&source=editors&ust=1757854453324170&usg=AOvVaw0VNI-ZSlyZXFMvpsnwhxRk',
                                icon: 'fa-solid fa-cloud'
                            }
                        ]
                    },
                    //Consumer (Home/SL/Pro/Edu/Workstations) 32bit
                    {
                        name: 'Consumer (Home/SL/Pro/Edu/Workstations)',
                        description: '32bit',
                        size: '4.8 GB',
                        links: [
                            {
                                name: 'PITVN Google Drive',
                                url: 'https://www.google.com/url?q=https://drive.google.com/file/d/1KuH9i11JKvTYpBzg3Bq0tPqzumd5qTwd/view?usp%3Ddrivesdk&sa=D&source=editors&ust=1757854453324768&usg=AOvVaw2Nn9jluoowS1juNh080Tae',
                                icon: 'fab fa-google-drive'
                            },
                            {
                                name: 'PITVN Google Drive',
                                url: 'https://www.google.com/url?q=https://drive.google.com/file/d/1I7JBftfu7nWpfvhfYWmqypoG9KdWYmNl/view?usp%3Ddrivesdk&sa=D&source=editors&ust=1757854453324702&usg=AOvVaw19yUrhrvMZoBIN28rH6IMI',
                                icon: 'fab fa-google-drive'
                            },
                            {
                                name: 'PITVN Onedrive',
                                url: 'https://www.google.com/url?q=https://glennsferryschools-my.sharepoint.com/:u:/g/personal/ithelpdesk_glennsferryschools_onmicrosoft_com/EdswXvzsqJdDiZTJSGnwGqMBE51xm2qL48zVp-Q_qg9xow&sa=D&source=editors&ust=1757854453324633&usg=AOvVaw279DjGKsc4btI-wWC51848',
                                icon: 'fa-solid fa-cloud'
                            },
                            {
                                name: 'PITVN Onedrive',
                                url: 'https://www.google.com/url?q=https://glennsferryschools-my.sharepoint.com/:u:/g/personal/billgates_glennsferryschools_onmicrosoft_com/ETHTsmGlJAdIvZVz9irKH7gBV-wiE7YPN_cL4XENTMcITw&sa=D&source=editors&ust=1757854453324569&usg=AOvVaw2i4w3h7pnrqUyvX9IpKhEU',
                                icon: 'fa-solid fa-cloud'
                            }
                        ]
                    },
                    //IoT Enterprise Arm64
                    {
                        name: 'Consumer (Home/SL/Pro/Edu/Workstations)',
                        description: 'Arm64',
                        size: '4.8 GB',
                        links: []
                    },
                    //IoT Enterprise 64bit
                    {
                        name: 'Consumer (Home/SL/Pro/Edu/Workstations)',
                        description: '64bit',
                        size: '4.8 GB',
                        links: []
                    }
                ]
            },
            // Windows 10 Version 21H2 MSDN Build 19044.3086 20 June 2023
            {
                name: 'Windows 10 Version 21H2 MSDN Build 19044.3086 20 June 2023',
                size: '5.2 GB',
                editions: [
                    //Business (Edu/Enterprise/Pro/Workstations) 64bit
                    {
                        name: 'Business (Edu/Enterprise/Pro/Workstations)',
                        description: '64bit',
                        size: '4.8 GB',
                        links: [
                            {
                                name: 'PITVN Google Drive',
                                url: 'https://www.google.com/url?q=https://drive.google.com/file/d/1Fkad4syoOrvVzmg9rzzenZY6Sa8qEZI-/view?usp%3Ddrivesdk&sa=D&source=editors&ust=1757854453326373&usg=AOvVaw1G4HjkSfhJcnLplaYqbjiI',
                                icon: 'fab fa-google-drive'
                            },
                            {
                                name: 'PITVN Google Drive',
                                url: 'https://www.google.com/url?q=https://drive.google.com/file/d/1pMxfbSv75Rp-94ShXFRDGlHw3rsWO_Ln/view?usp%3Ddrivesdk&sa=D&source=editors&ust=1757854453326303&usg=AOvVaw2ob0CHRUdqht2Hp-ih4InA',
                                icon: 'fab fa-google-drive'
                            },
                            {
                                name: 'PITVN Onedrive',
                                url: 'https://www.google.com/url?q=https://glennsferryschools-my.sharepoint.com/:u:/g/personal/billgates_glennsferryschools_onmicrosoft_com/EUxcHAgM121KuVq8qHbPVk4Bo3EnIIkuTmw1qY8jcyl5WQ&sa=D&source=editors&ust=1757854453326168&usg=AOvVaw1dd6L_ZaoARsopa90gtX_x',
                                icon: 'fa-solid fa-cloud'
                            },
                            {
                                name: 'PITVN Onedrive',
                                url: 'https://www.google.com/url?q=https://icedubai-my.sharepoint.com/:u:/g/personal/billgates_icedubai_onmicrosoft_com/EX88y0_wUo9Ou8lbpBmBIGABzHmjHxrA0h8SAX_5EYvo_w&sa=D&source=editors&ust=1757854453326232&usg=AOvVaw0rFNYzubvkTk6BVnfOnU7x',
                                icon: 'fa-solid fa-cloud'
                            }
                        ]
                    },
                    //Business (Edu/Enterprise/Pro/Workstations) 32bit
                    {
                        name: 'Business (Edu/Enterprise/Pro/Workstations)',
                        description: '32bit',
                        size: '4.8 GB',
                        links: [
                            {
                                name: 'PITVN Google Drive',
                                url: 'https://www.google.com/url?q=https://drive.google.com/file/d/1quWIv9Z67rPV4gnwWhK20cG_w2TwgXGd/view?usp%3Ddrivesdk&sa=D&source=editors&ust=1757854453326811&usg=AOvVaw0KtlZ6uYkuwXNa3GILtr0_',
                                icon: 'fab fa-google-drive'
                            },
                            {
                                name: 'PITVN Google Drive',
                                url: 'https://www.google.com/url?q=https://drive.google.com/file/d/1XOphrgrWQAQlx0rkT63C9jADATa4Ssmr/view?usp%3Ddrivesdk&sa=D&source=editors&ust=1757854453326747&usg=AOvVaw1y1fsHuG4AkMKjDOKvPIxC',
                                icon: 'fab fa-google-drive'
                            },
                            {
                                name: 'PITVN Onedrive',
                                url: 'https://www.google.com/url?q=https://icedubai-my.sharepoint.com/:u:/g/personal/billgates_icedubai_onmicrosoft_com/EV8Hnw37Zc9Duqo4FJZtt_4BPrcHeoZWHaIgiEKvyPhlsw&sa=D&source=editors&ust=1757854453326682&usg=AOvVaw3LCql_rjKyENkheBiivuth',
                                icon: 'fa-solid fa-cloud'
                            },
                            {
                                name: 'PITVN Onedrive',
                                url: 'https://www.google.com/url?q=https://glennsferryschools-my.sharepoint.com/:u:/g/personal/billgates_glennsferryschools_onmicrosoft_com/EcHEcMvQ3m1MvP3J1hwO7oQBW8qKcqBJztDqFZc8Kte9UQ&sa=D&source=editors&ust=1757854453326612&usg=AOvVaw25gBm9D75OBNHHNx4LT28d',
                                icon: 'fa-solid fa-cloud'
                            }
                        ]
                    },
                    //Consumer (Home/SL/Pro/Edu/Workstations) 64bit
                    {
                        name: 'Consumer (Home/SL/Pro/Edu/Workstations)',
                        description: '64bit',
                        size: '4.8 GB',
                        links: [
                            {
                                name: 'PITVN Google Drive',
                                url: 'https://www.google.com/url?q=https://drive.google.com/file/d/1SlGH2USJni7dxx0D62RRv76XYrhvGqmZ/view?usp%3Ddrivesdk&sa=D&source=editors&ust=1757854453327213&usg=AOvVaw2FHJbhvqncF8TRGHaD0DLq',
                                icon: 'fab fa-google-drive'
                            },
                            {
                                name: 'PITVN Google Drive',
                                url: 'https://www.google.com/url?q=https://drive.google.com/file/d/1rkgAFQQeplMg_77ETycfk5vfAJFNGpMe/view?usp%3Ddrivesdk&sa=D&source=editors&ust=1757854453327164&usg=AOvVaw18DpEH17h7Nppu-E2pgKyB',
                                icon: 'fab fa-google-drive'
                            },
                            {
                                name: 'PITVN Onedrive',
                                url: 'https://www.google.com/url?q=https://icedubai-my.sharepoint.com/:u:/g/personal/billgates_icedubai_onmicrosoft_com/EZIXVCYRggdNijFcvuNRMicBoS8c775bloWS1WCFnpRHVA&sa=D&source=editors&ust=1757854453327117&usg=AOvVaw1rwoxeknI5Z9ENlysWD_1E',
                                icon: 'fa-solid fa-cloud'
                            },
                            {
                                name: 'PITVN Onedrive',
                                url: 'https://www.google.com/url?q=https://glennsferryschools-my.sharepoint.com/:u:/g/personal/billgates_glennsferryschools_onmicrosoft_com/ET-m81pKc4dDkE_BzcF_FvcB4J2_c7dOqD2lvzk7nD-egw&sa=D&source=editors&ust=1757854453327043&usg=AOvVaw3jGvYXCoQigKQN9QmNnRW1',
                                icon: 'fa-solid fa-cloud'
                            }
                        ]
                    }, //Consumer (Home/SL/Pro/Edu/Workstations) 32bit
                    {
                        name: 'Consumer (Home/SL/Pro/Edu/Workstations)',
                        description: '32bit',
                        size: '4.8 GB',
                        links: [
                            {
                                name: 'PITVN Google Drive',
                                url: 'https://www.google.com/url?q=https://drive.google.com/file/d/1AFMdmbS09obNHBBVI5OWgq9Rfhsytm5c/view?usp%3Ddrivesdk&sa=D&source=editors&ust=1757854453327640&usg=AOvVaw1GNdPgKBVYTLAqAFKL1Gxm',
                                icon: 'fab fa-google-drive'
                            },
                            {
                                name: 'PITVN Google Drive',
                                url: 'https://www.google.com/url?q=https://drive.google.com/file/d/1hqWI9wLKkdQmlIskeOQzc6RUENzudRhY/view?usp%3Ddrivesdk&sa=D&source=editors&ust=1757854453327593&usg=AOvVaw2jT6p3XWoN-gusCz5LoeTK',
                                icon: 'fab fa-google-drive'
                            },
                            {
                                name: 'PITVN Onedrive',
                                url: 'https://www.google.com/url?q=https://icedubai-my.sharepoint.com/:u:/g/personal/billgates_icedubai_onmicrosoft_com/EbAL-Fm9hINJqQmGSImoLZkBU6C0r5N2ZjoYtnf-q3lFvA&sa=D&source=editors&ust=1757854453327535&usg=AOvVaw0vOw7WqfR49S50MmU-aVBv',
                                icon: 'fa-solid fa-cloud'
                            },
                            {
                                name: 'PITVN Onedrive',
                                url: 'https://www.google.com/url?q=https://glennsferryschools-my.sharepoint.com/:u:/g/personal/billgates_glennsferryschools_onmicrosoft_com/Eaui4ex4SExOsJXkLpfQGBcB4R4L6oRILlLiCAyfgd-yUQ&sa=D&source=editors&ust=1757854453327455&usg=AOvVaw2uctqwt7eTvP6Tn_SBEuKO',
                                icon: 'fa-solid fa-cloud'
                            }
                        ]
                    }
                ]
            },
            // Windows 10 Version 21H2 MSDN Build 19044.1288 16 November 2021 VLSC
            {
                name: 'Windows 10 Version 21H2 MSDN Build 19044.1288 16 November 2021 VLSC',
                size: '5.2 GB',
                editions: [
                    // Business (Edu/Enterprise/Pro/Workstations) 64bit
                    {
                        name: "Business (Edu/Enterprise/Pro/Workstations)",
                        description: "64bit",
                        size: "4.8 GB",
                        cmd: "business_64",
                        links: [
                            { name: "PITVN Google Drive", url: "https://www.google.com/url?q=https://drive.google.com/file/d/1Fkad4syoOrvVzmg9rzzenZY6Sa8qEZI-/view?usp%3Ddrivesdk&sa=D&source=editors&ust=1757854453326373&usg=AOvVaw1G4HjkSfhJcnLplaYqbjiI", icon: "fab fa-google-drive" },
                            { name: "PITVN Google Drive", url: "https://www.google.com/url?q=https://drive.google.com/file/d/1pMxfbSv75Rp-94ShXFRDGlHw3rsWO_Ln/view?usp%3Ddrivesdk&sa=D&source=editors&ust=1757854453326303&usg=AOvVaw2ob0CHRUdqht2Hp-ih4InA", icon: "fab fa-google-drive" },
                            { name: "PITVN Onedrive", url: "https://www.google.com/url?q=https://icedubai-my.sharepoint.com/:u:/g/personal/billgates_icedubai_onmicrosoft_com/EYC8ooBFNxJAhAjODyQ6WRIBGASLo6PK0_ATkkO9vdcz1A&sa=D&source=editors&ust=1757854453328168&usg=AOvVaw2E2ElhuQKm099LS8Etz2h7", icon: "fa-solid fa-cloud" },
                            { name: "PITVN Onedrive", url: "https://www.google.com/url?q=https://glennsferryschools-my.sharepoint.com/:u:/g/personal/billgates_glennsferryschools_onmicrosoft_com/EX2u85Z0lspLpLmk-tOGzIUBNSs0iO2vXhJ-9rjO3h4LGw&sa=D&source=editors&ust=1757854453328094&usg=AOvVaw13P8km0mQ4LxpjQZLg-KV2", icon: "fa-solid fa-cloud" }
                        ]
                    },

                    // Business (Edu/Enterprise/Pro/Workstations) 32bit
                    {
                        name: "Business (Edu/Enterprise/Pro/Workstations)",
                        description: "32bit",
                        size: "3.5 GB",
                        cmd: "business_32",
                        links: [
                            { name: "PITVN Google Drive", url: "https://www.google.com/url?q=https://drive.google.com/file/d/1ADpSVyrDgrF4glzcyHl9wHGneXitXpw7/view?usp%3Ddrivesdk&sa=D&source=editors&ust=1757854453328736&usg=AOvVaw2yvugLtBVvziGgWNeEDOHN", icon: "fab fa-google-drive" },
                            { name: "PITVN Google Drive", url: "https://www.google.com/url?q=https://drive.google.com/file/d/1Op61BAmxI58NyKaF8Q6urOIfNZ782uXz/view?usp%3Ddrivesdk&sa=D&source=editors&ust=1757854453328673&usg=AOvVaw0xizgq5lv41QsgT8LizcQu", icon: "fab fa-google-drive" },
                            { name: "PITVN Onedrive", url: "https://www.google.com/url?q=https://icedubai-my.sharepoint.com/:u:/g/personal/billgates_icedubai_onmicrosoft_com/EffC3nqBSblHjURb_YNbdzYBe0gILlovXF4QewRnnSxpaQ&sa=D&source=editors&ust=1757854453328613&usg=AOvVaw1DxOAuM68zgHESyeqpZZl_", icon: "fa-solid fa-cloud" },
                            { name: "PITVN Onedrive", url: "https://www.google.com/url?q=https://glennsferryschools-my.sharepoint.com/:u:/g/personal/billgates_glennsferryschools_onmicrosoft_com/EdwUdCRhjZNEh5_4P5LCUkwBDIpYiWzrcRXYKHfWGt6LIw&sa=D&source=editors&ust=1757854453328545&usg=AOvVaw1jdP8_LS6N7DpZ1532MDvc", icon: "fa-solid fa-cloud" }
                        ]
                    },

                    // Consumer (Home/SL/Pro/Edu/Workstations) 64bit
                    {
                        name: "Consumer (Home/SL/Pro/Edu/Workstations)",
                        description: "64bit",
                        size: "4.7 GB",
                        cmd: "consumer_64",
                        links: [
                            { name: "PITVN Google Drive", url: "https://www.google.com/url?q=https://drive.google.com/file/d/1HAswCQoKhPkKPci6MRO2Ko8S2bcd524g/view?usp%3Ddrivesdk&sa=D&source=editors&ust=1757854453329059&usg=AOvVaw1ZMVOBSmtAq9Y28fGs-FyX", icon: "fab fa-google-drive" },
                            { name: "PITVN Google Drive", url: "https://www.google.com/url?q=https://drive.google.com/file/d/1gqDF4eIYpkcLUrp16scp-MvEIkNjs29y/view?usp%3Ddrivesdk&sa=D&source=editors&ust=1757854453329012&usg=AOvVaw0slJSlSMwOwB_CXv05jb9O", icon: "fab fa-google-drive" },
                            { name: "PITVN Onedrive", url: "https://www.google.com/url?q=https://glennsferryschools-my.sharepoint.com/:u:/g/personal/billgates_glennsferryschools_onmicrosoft_com/EaVwpZGbBj5IjVwxHLxQtB4BoYUZVv-r0IaD3XfcBJLSBw&sa=D&source=editors&ust=1757854453328906&usg=AOvVaw0sSUZPhtpJ20QB8Beupupn", icon: "fa-solid fa-cloud" },
                            { name: "PITVN Onedrive", url: "https://www.google.com/url?q=https://icedubai-my.sharepoint.com/:u:/g/personal/billgates_icedubai_onmicrosoft_com/EeOzDhGl5_VMoWutM-GrkckBc35WhAH-GspSf5yS1nCONQ&sa=D&source=editors&ust=1757854453328961&usg=AOvVaw2YusRrzycZ-Y_LvngQDKse", icon: "fa-solid fa-cloud" }
                        ]
                    },

                    // Consumer (Home/SL/Pro/Edu/Workstations) 32bit
                    {
                        name: "Consumer (Home/SL/Pro/Edu/Workstations)",
                        description: "32bit",
                        size: "3.4 GB",
                        cmd: "consumer_32",
                        links: [
                            { name: "PITVN Google Drive", url: "https://www.google.com/url?q=https://drive.google.com/file/d/1YchkHdCsccEIhkpqp7hMUyX2GiIh4JGi/view?usp%3Ddrivesdk&sa=D&source=editors&ust=1757854453329381&usg=AOvVaw3f_6MnATP0mbcG9jDU56ef", icon: "fab fa-google-drive" },
                            { name: "PITVN Google Drive", url: "https://www.google.com/url?q=https://drive.google.com/file/d/13N4_oVJcR0e1bTAKyhJhsloiquIVgKwP/view?usp%3Ddrivesdk&sa=D&source=editors&ust=1757854453329337&usg=AOvVaw19DF74E74QRr9Bqh_wwrJ2", icon: "fab fa-google-drive" },
                            { name: "PITVN Onedrive", url: "https://www.google.com/url?q=https://icedubai-my.sharepoint.com/:u:/g/personal/billgates_icedubai_onmicrosoft_com/ESJWIwFloyFJt0nuBa1UdMUBN3WMHwRMOIfsEs37NLRIXw&sa=D&source=editors&ust=1757854453329290&usg=AOvVaw38uJIparYoUkj5IqNxaDi8", icon: "fa-solid fa-cloud" },
                            { name: "PITVN Onedrive", url: "https://www.google.com/url?q=https://glennsferryschools-my.sharepoint.com/:u:/g/personal/billgates_glennsferryschools_onmicrosoft_com/Eeon8Llw83VEgUt_2cObW34BT-b8fYfUnVukMpRdfG-saQ&sa=D&source=editors&ust=1757854453329234&usg=AOvVaw2srcUaRtLqi9TrT4gQZPve", icon: "fa-solid fa-cloud" }
                        ]
                    },

                    // Enterprise LTSC 2021 32bit
                    {
                        name: "Enterprise LTSC 2021",
                        description: "32bit",
                        size: "3.6 GB",
                        cmd: "enterprise_ltsc2021_32",
                        links: [
                            { name: "PITVN Google Drive", url: "https://www.google.com/url?q=https://drive.google.com/file/d/1TdVl-edecZIg_-MZNqoRVYZE3ksRVxmW/view?usp%3Ddrivesdk&sa=D&source=editors&ust=1757854453330075&usg=AOvVaw2-Pr0mD55ibwVWRsX0WlA1", icon: "fab fa-google-drive" },
                            { name: "PITVN Google Drive", url: "https://www.google.com/url?q=https://drive.google.com/file/d/1QxchbvSNXsCZjkv2tDHvOVeP0oFj7_sW/view?usp%3Ddrivesdk&sa=D&source=editors&ust=1757854453330033&usg=AOvVaw2j2AXkGbVroayl8uqmFwRg", icon: "fab fa-google-drive" },
                            { name: "PITVN Onedrive", url: "https://www.google.com/url?q=https://glennsferryschools-my.sharepoint.com/:u:/g/personal/billgates_glennsferryschools_onmicrosoft_com/EVUBZESqWqpNg35me-5RGpIBcGj1Wqub8O5qv0NYgMQddA&sa=D&source=editors&ust=1757854453329921&usg=AOvVaw0V75iZb6F-jwqo1Bb-El_r", icon: "fa-solid fa-cloud" },
                            { name: "PITVN Onedrive", url: "https://www.google.com/url?q=https://glennsferryschools-my.sharepoint.com/:u:/g/personal/billgates_glennsferryschools_onmicrosoft_com/EVUBZESqWqpNg35me-5RGpIBcGj1Wqub8O5qv0NYgMQddA&sa=D&source=editors&ust=1757854453329921&usg=AOvVaw0V75iZb6F-jwqo1Bb-El_r", icon: "fa-solid fa-cloud" }
                        ]
                    },

                    // Enterprise LTSC 2021 64bit
                    {
                        name: "Enterprise LTSC 2021",
                        description: "64bit - arm64",
                        size: "4.6 GB",
                        cmd: "enterprise_ltsc2021_64",
                        links: [
                            { name: "PITVN Google Drive", url: "https://www.google.com/url?q=https://drive.google.com/file/d/1VKcmA78k7K-Vevo2e8mlfdmfw-H9vrYk/view?usp%3Ddrivesdk&sa=D&source=editors&ust=1757854453329734&usg=AOvVaw3r7iQwgelwIMi-kFF8ftWL", icon: "fab fa-google-drive" },
                            { name: "PITVN Google Drive", url: "https://www.google.com/url?q=https://drive.google.com/file/d/1Y55g0QQf5nlh9PNBgrihwNYz8UEulfch/view?usp%3Ddrivesdk&sa=D&source=editors&ust=1757854453329690&usg=AOvVaw3W61ZB9OnW-nXLSbGoOw7Y", icon: "fab fa-google-drive" },
                            { name: "PITVN Onedrive", url: "https://www.google.com/url?q=https://icedubai-my.sharepoint.com/:u:/g/personal/billgates_icedubai_onmicrosoft_com/EbtWrp5ygfBEhIYOBCJj1foBtmTxdfuJvJoOWunbMqhS-Q&sa=D&source=editors&ust=1757854453329641&usg=AOvVaw3rzKtLrGlEyGmnZMZAXoqc", icon: "fa-solid fa-cloud" },
                            { name: "PITVN Onedrive", url: "https://www.google.com/url?q=https://glennsferryschools-my.sharepoint.com/:u:/g/personal/billgates_glennsferryschools_onmicrosoft_com/EXlZJ1r_II1Pu-DF4xmjYu4BZpYeFDuDfcQYqryOv6KG3A&sa=D&source=editors&ust=1757854453329589&usg=AOvVaw1xXHrHuXQzqGHnLqgqkao3", icon: "fa-solid fa-cloud" }
                        ]
                    },

                    // IoT Enterprise LTSC 2021 64bit
                    {
                        name: "IoT Enterprise LTSC 2021",
                        description: "64bit",
                        size: "4.5 GB",
                        cmd: "iot_ltsc2021_64",
                        links: [
                            { name: "PITVN Google Drive", url: "https://www.google.com/url?q=https://drive.google.com/file/d/1-8LEbHGQlnRwmvjLEeIM5oVeDzxNq5Ak/view?usp%3Ddrivesdk&sa=D&source=editors&ust=1757854453330402&usg=AOvVaw1QwYeyrdFh5YU1InSQJLUz", icon: "fab fa-google-drive" },
                            { name: "PITVN Google Drive", url: "https://www.google.com/url?q=https://drive.google.com/file/d/1Z1tZAW4hD-wu7yX-gvkqZr6hT5qCXQTQ/view?usp%3Ddrivesdk&sa=D&source=editors&ust=1757854453330358&usg=AOvVaw0raNH9AkKmZnLsbZda4SbC", icon: "fab fa-google-drive" },
                            { name: "PITVN Onedrive", url: "https://www.google.com/url?q=https://icedubai-my.sharepoint.com/:u:/g/personal/billgates_icedubai_onmicrosoft_com/EetDEqPlKyRDtJb2QaEtQSYBDm_6ekLHNldToCDcfWR3LQ&sa=D&source=editors&ust=1757854453330311&usg=AOvVaw1dN3vy94xBB_v6_18mHlcI", icon: "fa-solid fa-cloud" },
                            { name: "PITVN Onedrive", url: "https://www.google.com/url?q=https://glennsferryschools-my.sharepoint.com/:u:/g/personal/billgates_glennsferryschools_onmicrosoft_com/EWjq67PSYRRKl5NjNnIj5ewBDKaN_E9pbALdAHuUklPiEQ&sa=D&source=editors&ust=1757854453330254&usg=AOvVaw3JsRKY2e0aPHbfZVsJpqwa", icon: "fa-solid fa-cloud" }
                        ]
                    },

                    // IoT Enterprise arm64
                    {
                        name: "IoT Enterprise",
                        description: "arm64",
                        size: "4.4 GB",
                        cmd: "iot_arm64",
                        links: [
                            { name: "PITVN Google Drive", url: "https://www.google.com/url?q=https://drive.google.com/file/d/1MZQFUzknNXaVXZ5hqh6An04ayMmODXWB/view?usp%3Ddrivesdk&sa=D&source=editors&ust=1757854453330742&usg=AOvVaw1DXHnKskaWVLqiZ2GPWA6X", icon: "fab fa-google-drive" },
                            { name: "PITVN Google Drive", url: "https://www.google.com/url?q=https://drive.google.com/file/d/1q7IMQPNgGAR3YuDKAaFB6CvIQotuaXmw/view?usp%3Ddrivesdk&sa=D&source=editors&ust=1757854453330677&usg=AOvVaw0yGIyltZcBaySzgQTWKO6Y", icon: "fab fa-google-drive" },
                            { name: "PITVN Onedrive", url: "https://www.google.com/url?q=https://glennsferryschools-my.sharepoint.com/:u:/g/personal/billgates_glennsferryschools_onmicrosoft_com/EYAaN8sY33lHu4Cc_LkoLoIBh2jnWlbD9C8pJZ3SHHG8bA&sa=D&source=editors&ust=1757854453330574&usg=AOvVaw34j1wWIjrY-6ZSzuzGkK5f", icon: "fa-solid fa-cloud" },
                            { name: "PITVN Onedrive", url: "https://www.google.com/url?q=https://icedubai-my.sharepoint.com/:u:/g/personal/billgates_icedubai_onmicrosoft_com/Edi9caLF4qNAlNM8Ky8K6rcBWRd75EP-O4vYTTltmuUPeA&sa=D&source=editors&ust=1757854453330624&usg=AOvVaw09VnP8KSfCP-CBa77ZJqw9", icon: "fa-solid fa-cloud" }
                        ]
                    },

                    // IoT Enterprise 64bit
                    {
                        name: "IoT Enterprise",
                        description: "64bit",
                        size: "4.3 GB",
                        cmd: "iot_64",
                        links: [
                            { name: "PITVN Google Drive", url: "https://www.google.com/url?q=https://drive.google.com/file/d/1jlwILVVd5pTtSopmGRF1W6iX2eS2RShN/view?usp%3Ddrivesdk&sa=D&source=editors&ust=1757854453331072&usg=AOvVaw3TH7s-ASnSWO3whetFE5j2", icon: "fab fa-google-drive" },
                            { name: "PITVN Google Drive", url: "https://www.google.com/url?q=https://drive.google.com/file/d/1LonWnhpfb3H5rQSklRA_T7Hcv0YhPs8d/view?usp%3Ddrivesdk&sa=D&source=editors&ust=1757854453331020&usg=AOvVaw0qM6_lzZjHXk8qPjVAub8l", icon: "fab fa-google-drive" },
                            { name: "PITVN Onedrive", url: "https://www.google.com/url?q=https://icedubai-my.sharepoint.com/:u:/g/personal/billgates_icedubai_onmicrosoft_com/Ec8JONeH5LVHkHwNP-fIRVwB1ktubQEqZLQmWFgzhQA3ww&sa=D&source=editors&ust=1757854453330963&usg=AOvVaw3Hlh1pHq8rFt1t27eLeEMX", icon: "fa-solid fa-cloud" },
                            { name: "PITVN Onedrive", url: "https://www.google.com/url?q=https://glennsferryschools-my.sharepoint.com/:u:/g/personal/billgates_glennsferryschools_onmicrosoft_com/ETo4teOcS7lAiEKOSbdQmOQB5AWkePdnlHnwitygwOOqsw&sa=D&source=editors&ust=1757854453330904&usg=AOvVaw2I6UBf9bY_0VIkbwBjh8q1", icon: "fa-solid fa-cloud" }
                        ]
                    },

                    // WinPro10_21H2_64ARM_English arm64
                    {
                        name: "WinPro10_21H2_64ARM_English VLSC",
                        description: "arm64",
                        size: "4.2 GB",
                        cmd: "winpro10_21h2_arm64",
                        links: [
                            { name: "PITVN Google Drive", url: "https://www.google.com/url?q=https://drive.google.com/file/d/1UEI7vlCfnBl1hhBHRmxsz0pfErMmPv8U/view?usp%3Ddrivesdk&sa=D&source=editors&ust=1757854453331448&usg=AOvVaw2UYs0PjPx6OpRWnyXAJvx6", icon: "fab fa-google-drive" },
                            { name: "PITVN Google Drive", url: "https://www.google.com/url?q=https://drive.google.com/file/d/1BUfHeOeQaGA7X7C1VtB41xIoyL8pu3jI/view?usp%3Ddrivesdk&sa=D&source=editors&ust=1757854453331399&usg=AOvVaw35GhqLm4uh3WKfZQV7jJtj", icon: "fab fa-google-drive" },
                            { name: "PITVN Onedrive", url: "https://www.google.com/url?q=https://icedubai-my.sharepoint.com/:u:/g/personal/billgates_icedubai_onmicrosoft_com/ETDIb9X9z7lEtV4f-tlAFCsBNyhfD-OagIn2iKYomdcHTA&sa=D&source=editors&ust=1757854453331349&usg=AOvVaw0Nj7l1oA5d_VSPtwrMycFC", icon: "fa-solid fa-cloud" },
                            { name: "PITVN Onedrive", url: "https://www.google.com/url?q=https://glennsferryschools-my.sharepoint.com/:u:/g/personal/billgates_glennsferryschools_onmicrosoft_com/EX7yi_VmRxlBhjVSt3iajLEBBi10pyuGwdrkWwT1eLsFEA&sa=D&source=editors&ust=1757854453331287&usg=AOvVaw2tZypR09RDFy5olJ-mk9IB", icon: "fa-solid fa-cloud" }
                        ]
                    },

                ]
            }
            // Windows 10 Version 21H1 MSDN Build 19043.2364 20 December 2022
            // Windows 10 Version 21H1 MSDN Build 19043.928 18 May 2021
            // Windows 10 Version 20H2 MSDN Build 19042.1645 19 April 2022
            // Windows 10 Version 20H2 MSDN Build 19042.631 18 November 2020
            // Windows 10 Version 20H2 MSDN Build 19042.508 20 October 2020
            // Windows 10 Version 2004 MSDN Build 19041.1348 16 November 2021
            // Windows 10 Version 2004 MSDN Build 19041.264 21 May 2020
            // Windows 10 Version 1909 MSDN Build 18363.1621 22 June 2021
            // Windows 10 Version 1909 MSDN Build 18363.476 16 October 2019
            // Windows 10 Version 1903 MSDN Build 18362.1256 16 December 2020
            // Windows 10 Version 1903 MSDN Build 18362.175 19 June 2019
            // Windows 10 Version 1809 MSDN Build 17763.2114 17 August 2021
            // Windows 10 Version 1809 MSDN Build 17763.615 17 July 2019
            // Windows 10 Version 1809 MSDN Build 17763.316
            // Windows 10 Version 1809 MSDN Build 17763.107 16 November 2018
            // Windows 10 Version 1809 MSDN Build 17763.1 September 2018
            // Windows 10 Version 1803 MSDN Build 17134.950 21 August 2019
            // Windows 10 Version 1803 MSDN Build 17134.228 22 August 2018
            // Windows 10 Version 1709 MSDN Build 16299.125 19 December 2017
            // Windows 10 Version 1703 MSDN Build 15063.483
            // Windows 10 Version 1703 MSDN Build 15063.0 March 2017
            // Windows 10 Version 1607 MSDN Build 14393.0 (July 2016)
            // Windows 10 Version 1511 MSDN Build 10586.164 23 May 2016
            // Windows 10 Version 1507 MSDN Build 10240 28 July 2015

        ]
    },
    //____________________________END_WINDOW_10________________________________
    //____________________________WINDOW_8.1________________________________
    // Windows 8.1 with update 15 - Thg12 - 14 Khuyến nghị dùng
    // Windows 8.1 MSDN Build 9600.16384 No update(Không khuyến nghị)
    //____________________________END_WINDOW_8.1________________________________
    //____________________________WINDOW_8________________________________
    // Windows 8 MSDN 15 August 2012 (Không update Không khuyến nghị dùng)
    //____________________________END_WINDOW_8________________________________
    //____________________________WINDOW_7_____________________________________
    {
        id: 'windows7',
        name: 'Windows 7',
        description: 'Hệ điều hành Windows 7 từ Quang Huy Blog PITVN',
        category: 'windows',
        icon: 'fab fa-windows',
        versions: [
            //Windows 7 SP1final updates
            {
                name: 'Windows 7 SP1final updates',
                size: '5.2 GB',
                editions: [
                    //Home Premium 64bit
                    {
                        name: 'Home Premium',
                        description: '64bit',
                        size: '4.8 GB',
                        links: [
                            {
                                name: 'PITVN Google Drive',
                                url: 'https://www.google.com/url?q=https://drive.google.com/file/d/1UhDdD0ww5Es_QKz6PU2qJfpEuGyzhVb_/view?usp%3Ddrivesdk&sa=D&source=editors&ust=1757854453401899&usg=AOvVaw02FqEnUiemeb9HVAgi-fID',
                                icon: 'fab fa-google-drive'
                            },
                            {
                                name: 'PITVN Google Drive',
                                url: 'https://www.google.com/url?q=https://drive.google.com/file/d/1TryC_P0bWl4887i2A6n-pgy4SpvzcCs-/view?usp%3Ddrivesdk&sa=D&source=editors&ust=1757854453401850&usg=AOvVaw08XgPs0ju1ln_NabyO5GmN',
                                icon: 'fab fa-google-drive'
                            },
                            {
                                name: 'PITVN Onedrive',
                                url: 'https://www.google.com/url?q=https://icedubai-my.sharepoint.com/:u:/g/personal/billgates_icedubai_onmicrosoft_com/Ef9QtZHteXRNlN-JJJrBzF8Bg5QQlcSPaHgNFpH3NzpmWw&sa=D&source=editors&ust=1757854453401790&usg=AOvVaw0MJSsh4Ko2_6huzqTtvgUw',
                                icon: 'fa-solid fa-cloud'
                            },
                            {
                                name: 'PITVN Onedrive',
                                url: 'https://www.google.com/url?q=https://glennsferryschools-my.sharepoint.com/:u:/g/personal/billgates_glennsferryschools_onmicrosoft_com/EdiSj3LUf3dMqhTpGQ_BSDwBukpQeTplfGuWxE9UI4kDBQ&sa=D&source=editors&ust=1757854453401717&usg=AOvVaw32N0B_E7lm7_JO-xMy5RdZ',
                                icon: 'fa-solid fa-cloud'
                            }
                        ]
                    },
                    //Home Premium 32bit
                    {
                        name: 'Home Premium',
                        description: '32bit',
                        size: '4.8 GB',
                        links: [
                            {
                                name: 'PITVN Google Drive',
                                url: 'https://www.google.com/url?q=https://drive.google.com/file/d/18KvcvHG7rZr_KuWimAFUdPF-fJ01qmGP/view?usp%3Ddrivesdk&sa=D&source=editors&ust=1757854453402277&usg=AOvVaw3vzEtte3rwbfRix_ArAUXD',
                                icon: 'fab fa-google-drive'
                            },
                            {
                                name: 'PITVN Google Drive',
                                url: 'https://www.google.com/url?q=https://drive.google.com/file/d/1tGMfnD70qSfKbehT_v3kTWFnXMF-LJ1V/view?usp%3Ddrivesdk&sa=D&source=editors&ust=1757854453402230&usg=AOvVaw2leXnsp8SL0MbdmGmzy-fm',
                                icon: 'fab fa-google-drive'
                            },
                            {
                                name: 'PITVN Onedrive',
                                url: 'https://www.google.com/url?q=https://icedubai-my.sharepoint.com/:u:/g/personal/billgates_icedubai_onmicrosoft_com/EcmSmjk_Z0VAnYIyAVfLOt0B6EkANl_WbtnIRPF1RPkXHw&sa=D&source=editors&ust=1757854453402178&usg=AOvVaw0EuDVBkLHUnhtgvKGSg1Rq',
                                icon: 'fa-solid fa-cloud'
                            },
                            {
                                name: 'PITVN Onedrive',
                                url: 'https://www.google.com/url?q=https://glennsferryschools-my.sharepoint.com/:u:/g/personal/billgates_glennsferryschools_onmicrosoft_com/EenELsH8-jVKqxbMtOdCNv8B1OWpLOnvxg81gsSvJEL1eg&sa=D&source=editors&ust=1757854453402109&usg=AOvVaw3H_kCvJGTE1GXRWRWYRYm-',
                                icon: 'fa-solid fa-cloud'
                            }
                        ]
                    },
                    //Professional 64bit
                    {
                        name: 'Professional',
                        description: '64bit',
                        size: '4.8 GB',
                        links: [
                            {
                                name: 'PITVN Google Drive',
                                url: 'https://www.google.com/url?q=https://drive.google.com/file/d/1botjw3l2F9cQHc265U7gJFBn-7yWgH-i/view?usp%3Ddrivesdk&sa=D&source=editors&ust=1757854453402614&usg=AOvVaw1zK4NWmWbBvb45dKQ3d6rG',
                                icon: 'fab fa-google-drive'
                            },
                            {
                                name: 'PITVN Google Drive',
                                url: 'https://www.google.com/url?q=https://drive.google.com/file/d/1cBwFeZru9enmmUjuznh4nskmxVeeJwLh/view?usp%3Ddrivesdk&sa=D&source=editors&ust=1757854453402569&usg=AOvVaw3RA8yXnNZ2TXPyA6Ne80NX',
                                icon: 'fab fa-google-drive'
                            },
                            {
                                name: 'PITVN Onedrive',
                                url: 'https://www.google.com/url?q=https://icedubai-my.sharepoint.com/:u:/g/personal/billgates_icedubai_onmicrosoft_com/EcQATfv7kUREjXZ53GtYeT4BTjg5mVbKI5ql9OOCtWmMXQ&sa=D&source=editors&ust=1757854453402524&usg=AOvVaw2GndVc4h1Hh2uFctba1Ygi',
                                icon: 'x'
                            },
                            {
                                name: 'PITVN Onedrive',
                                url: 'https://www.google.com/url?q=https://glennsferryschools-my.sharepoint.com/:u:/g/personal/billgates_glennsferryschools_onmicrosoft_com/EWuC9afAPRpHnZWN9Qw5pg8ByzoSlFwNdxQo5MW7kOIlRw&sa=D&source=editors&ust=1757854453402473&usg=AOvVaw09BgKpr-rseyD28tSlBdTO',
                                icon: 'fa-solid fa-cloud'
                            }
                        ]
                    },
                    //Professional 32bit
                    {
                        name: 'Professional',
                        description: '32bit',
                        size: '4.8 GB',
                        links: [
                            {
                                name: 'PITVN Google Drive',
                                url: 'https://www.google.com/url?q=https://drive.google.com/file/d/1PFOjqoGdlOf65PsGO-fzvhRJt823dIYp/view?usp%3Ddrivesdk&sa=D&source=editors&ust=1757854453402937&usg=AOvVaw31bf03V514uCByjT124F3Y',
                                icon: 'fab fa-google-drive'
                            },
                            {
                                name: 'PITVN Google Drive',
                                url: 'https://www.google.com/url?q=https://drive.google.com/file/d/1xZttCU0gRfKSxh28UlAtye9EKRpvx5oF/view?usp%3Ddrivesdk&sa=D&source=editors&ust=1757854453402893&usg=AOvVaw2wOpPrLE6EE2OGf46eC44C',
                                icon: 'fab fa-google-drive'
                            },
                            {
                                name: 'PITVN Onedrive',
                                url: 'https://www.google.com/url?q=https://icedubai-my.sharepoint.com/:u:/g/personal/billgates_icedubai_onmicrosoft_com/EaIcjxgvemxIijyfM8FyBMMBxHhOeFB7lqXU7568HXhHLA&sa=D&source=editors&ust=1757854453402849&usg=AOvVaw0W85qvrvrhDJpAHK66FTyi',
                                icon: 'fa-solid fa-cloud'
                            },
                            {
                                name: 'PITVN Onedrive',
                                url: 'https://www.google.com/url?q=https://glennsferryschools-my.sharepoint.com/:u:/g/personal/billgates_glennsferryschools_onmicrosoft_com/EZ-M8GnXsS9HtTr9jSw-PDsB4DhZ6dmcFb2mxcz40tpZXw&sa=D&source=editors&ust=1757854453402798&usg=AOvVaw0L-hTsMyANRYrprcZQaGIx',
                                icon: 'fa-solid fa-cloud'
                            }
                        ]
                    },
                    //Ultimate 64bit
                    {
                        name: 'Ultimate',
                        description: '64bit',
                        size: '4.8 GB',
                        links: [
                            {
                                name: 'PITVN Google Drive',
                                url: 'https://www.google.com/url?q=https://drive.google.com/file/d/1tam7aJ6b-B0USb8fnP-Ye52ms8rsxcIB/view?usp%3Ddrivesdk&sa=D&source=editors&ust=1757854453403313&usg=AOvVaw1o7h1uxOFneKWMxg0mZy8v',
                                icon: 'fab fa-google-drive'
                            },
                            {
                                name: 'PITVN Google Drive',
                                url: 'https://www.google.com/url?q=https://drive.google.com/file/d/1ZzHB2s_R4_y89IeNRQcOco981vSfbYZ0/view?usp%3Ddrivesdk&sa=D&source=editors&ust=1757854453403262&usg=AOvVaw1bu26_dA38hQRwpzTpPSje',
                                icon: 'fab fa-google-drive'
                            },
                            {
                                name: 'PITVN Onedrive',
                                url: 'https://www.google.com/url?q=https://icedubai-my.sharepoint.com/:u:/g/personal/billgates_icedubai_onmicrosoft_com/EWq7VCzLowpPrHpdt1X7hrkBUws-I7nLK7_SjnEm5a0BKA&sa=D&source=editors&ust=1757854453403199&usg=AOvVaw0zLdgS-jXV0IwFUa7HU9tr',
                                icon: 'fa-solid fa-cloud'
                            },
                            {
                                name: 'PITVN Onedrive',
                                url: 'https://www.google.com/url?q=https://glennsferryschools-my.sharepoint.com/:u:/g/personal/billgates_glennsferryschools_onmicrosoft_com/EWz1DwaDyVdDnaDAPkQ1zWYBXpRMo9N3qjHu3WS-OR7chQ&sa=D&source=editors&ust=1757854453403148&usg=AOvVaw2x90KIXsId5HhcJisCJ6y1',
                                icon: 'fa-solid fa-cloud'
                            }
                        ]
                    },
                    //Ultimate 32bit
                    {
                        name: 'Ultimate',
                        description: '32bit',
                        size: '4.8 GB',
                        links: [
                            {
                                name: 'PITVN Google Drive',
                                url: 'https://www.google.com/url?q=https://drive.google.com/file/d/13Usi32rS58k2GuL3CTA_yzdIQwUUInzi/view?usp%3Ddrivesdk&sa=D&source=editors&ust=1757854453403694&usg=AOvVaw2ql88fKPI-YKKf_0w7O3wC',
                                icon: 'fab fa-google-drive'
                            },
                            {
                                name: 'PITVN Google Drive',
                                url: 'https://www.google.com/url?q=https://drive.google.com/file/d/11oDQpQ54kOSXXb8j_DKL32iNp1hIL5qM/view?usp%3Ddrivesdk&sa=D&source=editors&ust=1757854453403637&usg=AOvVaw3VVhHwuVRGqO2ti8SwR53m',
                                icon: 'fab fa-google-drive'
                            },
                            {
                                name: 'PITVN Onedrive',
                                url: 'https://www.google.com/url?q=https://icedubai-my.sharepoint.com/:u:/g/personal/billgates_icedubai_onmicrosoft_com/EXybb_5EBrlIpq5hR_nnI4EB00iwH2iGb5biHSv-dVGjfQ&sa=D&source=editors&ust=1757854453403591&usg=AOvVaw13N0fIi9QHco-3prFq2zT8',
                                icon: 'fa-solid fa-cloud'
                            },
                            {
                                name: 'PITVN Onedrive',
                                url: 'https://www.google.com/url?q=https://glennsferryschools-my.sharepoint.com/:u:/g/personal/billgates_glennsferryschools_onmicrosoft_com/EV5Mogl4NolJjQAxUeUvuAsBNvMTwuvVVmz5Y0mHWRHKgQ&sa=D&source=editors&ust=1757854453403533&usg=AOvVaw3ITcKQ4pJnZW4O92kDJAR1',
                                icon: 'fa-solid fa-cloud'
                            }
                        ]
                    },
                    //Pro, Ultimate (SP1)Usb 3.0, IE11 (August 2018) 64bit
                    {
                        name: 'Pro, Ultimate (SP1)Usb 3.0, IE11 (August 2018)',
                        description: '64bit',
                        size: '4.8 GB',
                        links: [
                            {
                                name: 'PITVN Google Drive',
                                url: 'https://www.google.com/url?q=https://drive.google.com/file/d/1ldDtOoUwmz4q_-BylXpA4kQ17z7cckH1/view?usp%3Ddrivesdk&sa=D&source=editors&ust=1757854453404041&usg=AOvVaw2NnhAGP5641lpC-dOsIGFk',
                                icon: 'fab fa-google-drive'
                            },
                            {
                                name: 'PITVN Google Drive',
                                url: 'https://www.google.com/url?q=https://drive.google.com/file/d/1yNXAuCyoWyab1ntwZ665XNDGoCXvtRZF/view?usp%3Ddrivesdk&sa=D&source=editors&ust=1757854453403994&usg=AOvVaw3xUpJZOQt3snTD7wk_9C-r',
                                icon: 'fab fa-google-drive'
                            },
                            {
                                name: 'PITVN Onedrive',
                                url: 'https://www.google.com/url?q=https://icedubai-my.sharepoint.com/:u:/g/personal/billgates_icedubai_onmicrosoft_com/EbzZpCGS2lRInDopLXmBYogBewGZ-ZI7LPL3ushIV_WSYw&sa=D&source=editors&ust=1757854453403947&usg=AOvVaw0NlxyEjkV9DxMeJkkCmi0z',
                                icon: 'fa-solid fa-cloud'
                            },
                            {
                                name: 'PITVN Onedrive',
                                url: 'https://www.google.com/url?q=https://glennsferryschools-my.sharepoint.com/:u:/g/personal/billgates_glennsferryschools_onmicrosoft_com/EY3inNaEN5BJogUm713Kw8cBrSm8hbP4aATTviwNWjylWw&sa=D&source=editors&ust=1757854453403895&usg=AOvVaw28HmejCwqD8y1mlQy5KXuC',
                                icon: 'fa-solid fa-cloud'
                            }
                        ]
                    },
                    //Pro, Ultimate (SP1)Usb 3.0, IE11 (August 2018) 32bit
                    {
                        name: 'Pro, Ultimate (SP1)Usb 3.0, IE11 (August 2018)',
                        description: '32bit',
                        size: '4.8 GB',
                        links: [
                            {
                                name: 'PITVN Google Drive',
                                url: 'https://www.google.com/url?q=https://drive.google.com/file/d/1eX3MnxUteTG-4QVEwUa0dECgvoj6wKDR/view?usp%3Ddrivesdk&sa=D&source=editors&ust=1757854453404334&usg=AOvVaw35bwGtEjjyY6ZRwPWVQX9D',
                                icon: 'fab fa-google-drive'
                            },
                            {
                                name: 'PITVN Google Drive',
                                url: 'https://www.google.com/url?q=https://drive.google.com/file/d/1Ce-BIOWsN95aJ_aUTOVS_drgp53J4mVd/view?usp%3Ddrivesdk&sa=D&source=editors&ust=1757854453404292&usg=AOvVaw0OZ-yGOJ8ruTiFDzh4P7YA',
                                icon: 'fab fa-google-drive'
                            },
                            {
                                name: 'PITVN Onedrive',
                                url: 'https://www.google.com/url?q=https://icedubai-my.sharepoint.com/:u:/g/personal/billgates_icedubai_onmicrosoft_com/EeN8mRAWQD5FnQn9g2m4UigBLY85LCHrm0cagPhpOslVNQ&sa=D&source=editors&ust=1757854453404248&usg=AOvVaw1pWyqccB-66v8Vc6KPjmBI',
                                icon: 'fa-solid fa-cloud'
                            },
                            {
                                name: 'PITVN Onedrive',
                                url: 'https://www.google.com/url?q=https://glennsferryschools-my.sharepoint.com/:u:/g/personal/billgates_glennsferryschools_onmicrosoft_com/EfBOraenYYBKg2QGL9yxvIMBeR94mVyV4AIyo3YU0rPjEw&sa=D&source=editors&ust=1757854453404196&usg=AOvVaw36CbF3vlEx0aoonwBbyCnK',
                                icon: 'fa-solid fa-cloud'
                            }
                        ]
                    }
                ]
            },
            // //Windows 10 Version 22H2 MSDN Build 19045.6216 19 August 2025
            // {
            //     name: 'Version 22H2 MSDN Build 19045.6216 19 August 2025',
            //     size: '5.2 GB',
            //     editions: [
            //         //Business (Edu/Enterprise/Pro/Workstations) 64bit
            //         {
            //             name: 'Business (Edu/Enterprise/Pro/Workstations)',
            //             description: '64bit',
            //             size: '4.8 GB',
            //             links: [
            //                 {
            //                     name: 'PITVN Google Drive',
            //                     url:'',
            //                     icon: 'fab fa-google-drive'
            //                 },
            //                 {
            //                      name: 'PITVN Google Drive',
            //                     url:'',
            //                     icon: 'fab fa-google-drive'
            //                 },
            //                 {
            //                     name: 'PITVN Onedrive',
            //                     url: '',
            //                      icon: 'fa-solid fa-cloud'
            //                 },
            //                 {
            //                     name: 'PITVN Onedrive',
            //                     url: '',
            //                      icon: 'fa-solid fa-cloud'
            //                 }
            //             ]
            //         },

            //     ]
            // },

        ]
    },
    //____________________________END_WINDOW_7_____________________________________
    //____________________________MICROSOFT_WINDOWS_VISTA__________________________
    //Windows Vista with Service Pack 2 MSDN 11 May 2009
    //____________________________END_MICROSOFT_WINDOWS_VISTA______________________
    //____________________________WINDOW_XP__________________________
    //Windows XP - MSDN
    //Windows XP
    //___________________________END_WINDOW_XP______________________
    //____________________________WINDOW_SERVER__________________________
    //  Windows Server 2025 Build 26100.4946 - 24H2
    //  Windows Server 2022 Build 20348.4052 - 21H2
    //  Windows Server 2019 Build 17763.2114
    //  Windows Server 2016 Version 1607 MSDN build 14393.447 12 - Thg1 - 17
    //  Windows Server 2016 Version 1607 MSDN Build 14393.0 12 - Thg10 - 16
    //  Windows Server 2012 R2 MSDN 09 - Thg9 - 13
    //  Windows Server 2012 MSDN
    //  Windows Server 2008 R2 MSDN
    //___________________________END_WINDOW_SERVER______________________


    //____________________________MICROSOFT OFFICE_____________________________________

    // Microsoft Office - 365
    // {
    //     id: 'office365',
    //     name: 'Microsoft Office 365',
    //     description: 'Microsoft Office 365 từ Quang Huy Blog PITVN',
    //     category: 'office',
    //     icon: 'fas fa-file-word',
    //     versions: [
    //         {
    //             name: 'Office 2021 retailMSDN, 05 October 2021 for Window',
    //             size: '2.8 GB',
    //             editions: [
    //                 //Professional Plus 
    //                 {
    //                     name: 'Professional Plus',
    //                     description: '64bit & 32bit',
    //                     size: '4.8 GB',
    //                     links: [
    //                         {
    //                             name: 'PITVN Google Drive',
    //                             url: '',
    //                             icon: 'fab fa-google-drive'
    //                         },
    //                         {
    //                             name: 'PITVN Google Drive',
    //                             url: '',
    //                             icon: 'fab fa-google-drive'
    //                         },
    //                         {
    //                             name: 'PITVN Onedrive',
    //                             url: '',
    //                             icon: 'fa-solid fa-cloud'
    //                         },
    //                         {
    //                             name: 'PITVN Onedrive',
    //                             url: '',
    //                             icon: 'fa-solid fa-cloud'
    //                         }

    //                     ]
    //                 },
    //                 //Outlook 
    //                 {
    //                     name: 'Outlook',
    //                     description: '64bit & 32bit',
    //                     size: '4.8 GB',
    //                     links: [
    //                         {
    //                             name: 'PITVN Google Drive',
    //                             url: '',
    //                             icon: 'fab fa-google-drive'
    //                         },
    //                         {
    //                             name: 'PITVN Google Drive',
    //                             url: '',
    //                             icon: 'fab fa-google-drive'
    //                         },
    //                         {
    //                             name: 'PITVN Onedrive',
    //                             url: '',
    //                             icon: 'fa-solid fa-cloud'
    //                         },
    //                         {
    //                             name: 'PITVN Onedrive',
    //                             url: '',
    //                             icon: 'fa-solid fa-cloud'
    //                         }

    //                     ]
    //                 },
    //                 //Outlook - tiếng Việt 
    //                 {
    //                     name: 'Outlook - tiếng Việt',
    //                     description: '64bit & 32bit',
    //                     size: '4.8 GB',
    //                     links: [
    //                         {
    //                             name: 'PITVN Google Drive',
    //                             url: '',
    //                             icon: 'fab fa-google-drive'
    //                         },
    //                         {
    //                             name: 'PITVN Google Drive',
    //                             url: '',
    //                             icon: 'fab fa-google-drive'
    //                         },
    //                         {
    //                             name: 'PITVN Onedrive',
    //                             url: '',
    //                             icon: 'fa-solid fa-cloud'
    //                         },
    //                         {
    //                             name: 'PITVN Onedrive',
    //                             url: '',
    //                             icon: 'fa-solid fa-cloud'
    //                         }

    //                     ]
    //                 },
    //                 //Project Professional 
    //                 {
    //                     name: 'Project Professional',
    //                     description: '64bit & 32bit',
    //                     size: '4.8 GB',
    //                     links: [
    //                         {
    //                             name: 'PITVN Google Drive',
    //                             url: '',
    //                             icon: 'fab fa-google-drive'
    //                         },
    //                         {
    //                             name: 'PITVN Google Drive',
    //                             url: '',
    //                             icon: 'fab fa-google-drive'
    //                         },
    //                         {
    //                             name: 'PITVN Onedrive',
    //                             url: '',
    //                             icon: 'fa-solid fa-cloud'
    //                         },
    //                         {
    //                             name: 'PITVN Onedrive',
    //                             url: '',
    //                             icon: 'fa-solid fa-cloud'
    //                         }

    //                     ]
    //                 },
    //                 //Project Standard 
    //                 {
    //                     name: 'Project Standard',
    //                     description: '64bit & 32bit',
    //                     size: '4.8 GB',
    //                     links: [
    //                         {
    //                             name: 'PITVN Google Drive',
    //                             url: '',
    //                             icon: 'fab fa-google-drive'
    //                         },
    //                         {
    //                             name: 'PITVN Google Drive',
    //                             url: '',
    //                             icon: 'fab fa-google-drive'
    //                         },
    //                         {
    //                             name: 'PITVN Onedrive',
    //                             url: '',
    //                             icon: 'fa-solid fa-cloud'
    //                         },
    //                         {
    //                             name: 'PITVN Onedrive',
    //                             url: '',
    //                             icon: 'fa-solid fa-cloud'
    //                         }

    //                     ]
    //                 },
    //                 //Visio Professional 
    //                 {
    //                     name: 'Visio Professional',
    //                     description: '64bit & 32bit',
    //                     size: '4.8 GB',
    //                     links: [
    //                         {
    //                             name: 'PITVN Google Drive',
    //                             url: '',
    //                             icon: 'fab fa-google-drive'
    //                         },
    //                         {
    //                             name: 'PITVN Google Drive',
    //                             url: '',
    //                             icon: 'fab fa-google-drive'
    //                         },
    //                         {
    //                             name: 'PITVN Onedrive',
    //                             url: '',
    //                             icon: 'fa-solid fa-cloud'
    //                         },
    //                         {
    //                             name: 'PITVN Onedrive',
    //                             url: '',
    //                             icon: 'fa-solid fa-cloud'
    //                         }

    //                     ]
    //                 },
    //                 //Visio Standard 
    //                 {
    //                     name: 'Visio Standard',
    //                     description: '64bit & 32bit',
    //                     size: '4.8 GB',
    //                     links: [
    //                         {
    //                             name: 'PITVN Google Drive',
    //                             url: '',
    //                             icon: 'fab fa-google-drive'
    //                         },
    //                         {
    //                             name: 'PITVN Google Drive',
    //                             url: '',
    //                             icon: 'fab fa-google-drive'
    //                         },
    //                         {
    //                             name: 'PITVN Onedrive',
    //                             url: '',
    //                             icon: 'fa-solid fa-cloud'
    //                         },
    //                         {
    //                             name: 'PITVN Onedrive',
    //                             url: '',
    //                             icon: 'fa-solid fa-cloud'
    //                         }

    //                     ]
    //                 },  //Professional Plus - tiếng Việt 
    //                 {
    //                     name: 'Professional Plus - tiếng Việt',
    //                     description: '64bit & 32bit',
    //                     size: '4.8 GB',
    //                     links: [
    //                         {
    //                             name: 'PITVN Google Drive',
    //                             url: '',
    //                             icon: 'fab fa-google-drive'
    //                         },
    //                         {
    //                             name: 'PITVN Google Drive',
    //                             url: '',
    //                             icon: 'fab fa-google-drive'
    //                         },
    //                         {
    //                             name: 'PITVN Onedrive',
    //                             url: '',
    //                             icon: 'fa-solid fa-cloud'
    //                         },
    //                         {
    //                             name: 'PITVN Onedrive',
    //                             url: '',
    //                             icon: 'fa-solid fa-cloud'
    //                         }

    //                     ]
    //                 },

    //                 // //Outlook 
    //                 // {
    //                 //     name: 'Outlook',
    //                 //     description: '64bit & 32bit',
    //                 //     size: '4.8 GB',
    //                 //     links: [
    //                 //         {
    //                 //             name: 'PITVN Google Drive',
    //                 //             url: '',
    //                 //             icon: 'fab fa-google-drive'
    //                 //         },
    //                 //         {
    //                 //             name: 'PITVN Google Drive',
    //                 //             url: '',
    //                 //             icon: 'fab fa-google-drive'
    //                 //         },
    //                 //         {
    //                 //             name: 'PITVN Onedrive',
    //                 //             url: '',
    //                 //             icon: 'fa-solid fa-cloud'
    //                 //         },
    //                 //         {
    //                 //             name: 'PITVN Onedrive',
    //                 //             url: '',
    //                 //             icon: 'fa-solid fa-cloud'
    //                 //         }

    //                 //     ]
    //                 // }
    //             ]
    //         }
    //     ]
    // },
    // Microsoft Office - 2024
    // {
    //     id: 'office2024',
    //     name: 'Microsoft Office 2024',
    //     description: 'Bộ ứng dụng văn phòng Office 2024 từ PITVN Community Resources',
    //     category: 'office',
    //     icon: 'fas fa-file-word',
    //     versions: [
    //         {
    //             name: 'Office 2021 retailMSDN, 05 October 2021 for Window',
    //             size: '2.8 GB',
    //             editions: [
    //                 //Professional Plus 
    //                 {
    //                     name: 'Professional Plus',
    //                     description: '64bit & 32bit',
    //                     size: '4.8 GB',
    //                     links: [
    //                         {
    //                             name: 'PITVN Google Drive',
    //                             url: '',
    //                             icon: 'fab fa-google-drive'
    //                         },
    //                         {
    //                             name: 'PITVN Google Drive',
    //                             url: '',
    //                             icon: 'fab fa-google-drive'
    //                         },
    //                         {
    //                             name: 'PITVN Onedrive',
    //                             url: '',
    //                             icon: 'fa-solid fa-cloud'
    //                         },
    //                         {
    //                             name: 'PITVN Onedrive',
    //                             url: '',
    //                             icon: 'fa-solid fa-cloud'
    //                         }

    //                     ]
    //                 },
    //                 //Outlook 
    //                 {
    //                     name: 'Outlook',
    //                     description: '64bit & 32bit',
    //                     size: '4.8 GB',
    //                     links: [
    //                         {
    //                             name: 'PITVN Google Drive',
    //                             url: '',
    //                             icon: 'fab fa-google-drive'
    //                         },
    //                         {
    //                             name: 'PITVN Google Drive',
    //                             url: '',
    //                             icon: 'fab fa-google-drive'
    //                         },
    //                         {
    //                             name: 'PITVN Onedrive',
    //                             url: '',
    //                             icon: 'fa-solid fa-cloud'
    //                         },
    //                         {
    //                             name: 'PITVN Onedrive',
    //                             url: '',
    //                             icon: 'fa-solid fa-cloud'
    //                         }

    //                     ]
    //                 },
    //                 //Outlook - tiếng Việt 
    //                 {
    //                     name: 'Outlook - tiếng Việt',
    //                     description: '64bit & 32bit',
    //                     size: '4.8 GB',
    //                     links: [
    //                         {
    //                             name: 'PITVN Google Drive',
    //                             url: '',
    //                             icon: 'fab fa-google-drive'
    //                         },
    //                         {
    //                             name: 'PITVN Google Drive',
    //                             url: '',
    //                             icon: 'fab fa-google-drive'
    //                         },
    //                         {
    //                             name: 'PITVN Onedrive',
    //                             url: '',
    //                             icon: 'fa-solid fa-cloud'
    //                         },
    //                         {
    //                             name: 'PITVN Onedrive',
    //                             url: '',
    //                             icon: 'fa-solid fa-cloud'
    //                         }

    //                     ]
    //                 },
    //                 //Project Professional 
    //                 {
    //                     name: 'Project Professional',
    //                     description: '64bit & 32bit',
    //                     size: '4.8 GB',
    //                     links: [
    //                         {
    //                             name: 'PITVN Google Drive',
    //                             url: '',
    //                             icon: 'fab fa-google-drive'
    //                         },
    //                         {
    //                             name: 'PITVN Google Drive',
    //                             url: '',
    //                             icon: 'fab fa-google-drive'
    //                         },
    //                         {
    //                             name: 'PITVN Onedrive',
    //                             url: '',
    //                             icon: 'fa-solid fa-cloud'
    //                         },
    //                         {
    //                             name: 'PITVN Onedrive',
    //                             url: '',
    //                             icon: 'fa-solid fa-cloud'
    //                         }

    //                     ]
    //                 },
    //                 //Project Standard 
    //                 {
    //                     name: 'Project Standard',
    //                     description: '64bit & 32bit',
    //                     size: '4.8 GB',
    //                     links: [
    //                         {
    //                             name: 'PITVN Google Drive',
    //                             url: '',
    //                             icon: 'fab fa-google-drive'
    //                         },
    //                         {
    //                             name: 'PITVN Google Drive',
    //                             url: '',
    //                             icon: 'fab fa-google-drive'
    //                         },
    //                         {
    //                             name: 'PITVN Onedrive',
    //                             url: '',
    //                             icon: 'fa-solid fa-cloud'
    //                         },
    //                         {
    //                             name: 'PITVN Onedrive',
    //                             url: '',
    //                             icon: 'fa-solid fa-cloud'
    //                         }

    //                     ]
    //                 },
    //                 //Visio Professional 
    //                 {
    //                     name: 'Visio Professional',
    //                     description: '64bit & 32bit',
    //                     size: '4.8 GB',
    //                     links: [
    //                         {
    //                             name: 'PITVN Google Drive',
    //                             url: '',
    //                             icon: 'fab fa-google-drive'
    //                         },
    //                         {
    //                             name: 'PITVN Google Drive',
    //                             url: '',
    //                             icon: 'fab fa-google-drive'
    //                         },
    //                         {
    //                             name: 'PITVN Onedrive',
    //                             url: '',
    //                             icon: 'fa-solid fa-cloud'
    //                         },
    //                         {
    //                             name: 'PITVN Onedrive',
    //                             url: '',
    //                             icon: 'fa-solid fa-cloud'
    //                         }

    //                     ]
    //                 },
    //                 //Visio Standard 
    //                 {
    //                     name: 'Visio Standard',
    //                     description: '64bit & 32bit',
    //                     size: '4.8 GB',
    //                     links: [
    //                         {
    //                             name: 'PITVN Google Drive',
    //                             url: '',
    //                             icon: 'fab fa-google-drive'
    //                         },
    //                         {
    //                             name: 'PITVN Google Drive',
    //                             url: '',
    //                             icon: 'fab fa-google-drive'
    //                         },
    //                         {
    //                             name: 'PITVN Onedrive',
    //                             url: '',
    //                             icon: 'fa-solid fa-cloud'
    //                         },
    //                         {
    //                             name: 'PITVN Onedrive',
    //                             url: '',
    //                             icon: 'fa-solid fa-cloud'
    //                         }

    //                     ]
    //                 },  //Professional Plus - tiếng Việt 
    //                 {
    //                     name: 'Professional Plus - tiếng Việt',
    //                     description: '64bit & 32bit',
    //                     size: '4.8 GB',
    //                     links: [
    //                         {
    //                             name: 'PITVN Google Drive',
    //                             url: '',
    //                             icon: 'fab fa-google-drive'
    //                         },
    //                         {
    //                             name: 'PITVN Google Drive',
    //                             url: '',
    //                             icon: 'fab fa-google-drive'
    //                         },
    //                         {
    //                             name: 'PITVN Onedrive',
    //                             url: '',
    //                             icon: 'fa-solid fa-cloud'
    //                         },
    //                         {
    //                             name: 'PITVN Onedrive',
    //                             url: '',
    //                             icon: 'fa-solid fa-cloud'
    //                         }

    //                     ]
    //                 },

    //                 // //Outlook 
    //                 // {
    //                 //     name: 'Outlook',
    //                 //     description: '64bit & 32bit',
    //                 //     size: '4.8 GB',
    //                 //     links: [
    //                 //         {
    //                 //             name: 'PITVN Google Drive',
    //                 //             url: '',
    //                 //             icon: 'fab fa-google-drive'
    //                 //         },
    //                 //         {
    //                 //             name: 'PITVN Google Drive',
    //                 //             url: '',
    //                 //             icon: 'fab fa-google-drive'
    //                 //         },
    //                 //         {
    //                 //             name: 'PITVN Onedrive',
    //                 //             url: '',
    //                 //             icon: 'fa-solid fa-cloud'
    //                 //         },
    //                 //         {
    //                 //             name: 'PITVN Onedrive',
    //                 //             url: '',
    //                 //             icon: 'fa-solid fa-cloud'
    //                 //         }

    //                 //     ]
    //                 // }
    //             ]
    //         }
    //     ]
    // },
    // Microsoft Office - 2019
    {
        id: 'office2019',
        name: 'Microsoft Office 2019',
        description: 'Bộ ứng dụng văn phòng Office 2019 từ Quang Huy Blog PITVN',
        category: 'office',
        icon: 'fas fa-file-word',
        versions: [
            {
                name: 'Professional Plus',
                size: '2.3 GB',
                links: [
                    {
                        name: 'PITVN Google Drive',
                        url: 'https://www.google.com/url?q=https://drive.google.com/file/d/1SqJTlHjwEeh9SJMRFQx8R705kxw0-6dT/view?usp%3Ddrivesdk&sa=D&source=editors&ust=1758038820696727&usg=AOvVaw327Nu2y_Y04wGlvsGPZGO2',
                        icon: 'fab fa-google-drive'
                    },
                    {
                        name: 'PITVN Google Drive',
                        url: 'https://www.google.com/url?q=https://drive.google.com/file/d/145emQkCASlkcF9GSTnzuRKW6h3YN-KF7/view?usp%3Ddrivesdk&sa=D&source=editors&ust=1758038820696820&usg=AOvVaw3QPY-gtXcIDEdci11zXZ-G',
                        icon: 'fab fa-google-drive'
                    },
                    {
                        name: 'PITVN Onedrive',
                        url: 'https://www.google.com/url?q=https://glennsferryschools-my.sharepoint.com/:u:/g/personal/billgates_glennsferryschools_onmicrosoft_com/ESjFioti6CdJquKMYEpUwewBd_ePrWc0uimSi_l5lZxrJA&sa=D&source=editors&ust=1758038820696914&usg=AOvVaw3ddOgRHehDwqVMeZF5Qx9h',
                        icon: 'fa-solid fa-cloud'
                    },
                    {
                        name: 'PITVN Onedrive',
                        url: 'https://www.google.com/url?q=https://icedubai-my.sharepoint.com/:u:/g/personal/billgates_icedubai_onmicrosoft_com/EcptjUhGWWlDpZVINRopyT4BFe6qp5XlsrtoXxS6JhUg7Q&sa=D&source=editors&ust=1758038820697003&usg=AOvVaw19wxzqn-UaOEfkxHqg8gJY',
                        icon: 'fa-solid fa-cloud'
                    }
                ]
            },
            {
                name: 'Project Professional',
                size: '2.3 GB',
                links: [
                    {
                        name: 'PITVN Google Drive',
                        url: 'https://www.google.com/url?q=https://drive.google.com/file/d/1aNxjjCqt6QyEZQxkwbnXQ8lZ54PCc1Zi/view?usp%3Ddrivesdk&sa=D&source=editors&ust=1758038820697865&usg=AOvVaw3xUMv4CXPKpRkcQZ0i8Khn',
                        icon: 'fab fa-google-drive'
                    },
                    {
                        name: 'PITVN Google Drive',
                        url: 'https://www.google.com/url?q=https://drive.google.com/file/d/1XW_WhGrQOId5TdQ4p2hFsfTWH1Ex5Kt7/view?usp%3Ddrivesdk&sa=D&source=editors&ust=1758038820697969&usg=AOvVaw1X1Chnw8CyCpKEfKGp6xxJ',
                        icon: 'fab fa-google-drive'
                    },
                    {
                        name: 'PITVN Onedrive',
                        url: 'https://www.google.com/url?q=https://glennsferryschools-my.sharepoint.com/:u:/g/personal/billgates_glennsferryschools_onmicrosoft_com/EVmDCzjnaEBNm5eHkyPBUWsB5U9ptvMzDg6TMUNpQWYYiA&sa=D&source=editors&ust=1758038820698050&usg=AOvVaw1q53kpcf2C1c7OM-7siuQs',
                        icon: 'fa-solid fa-cloud'
                    },
                    {
                        name: 'PITVN Onedrive',
                        url: 'https://www.google.com/url?q=https://icedubai-my.sharepoint.com/:u:/g/personal/billgates_icedubai_onmicrosoft_com/EQQhrlxlbU9CqyiX05y29U8Bcd1chDkeK8FbQ_rBw-GJHA&sa=D&source=editors&ust=1758038820698142&usg=AOvVaw0X1sZnut7MSk4GMFR2HqoY',
                        icon: 'fa-solid fa-cloud'
                    }
                ]
            },
            {
                name: 'Visio Professional',
                size: '2.3 GB',
                links: [
                    {
                        name: 'PITVN Google Drive',
                        url: 'https://www.google.com/url?q=https://drive.google.com/file/d/1OhuFlPOj3mM_g-Rvmwv1u9Dh2-KXGtGe/view?usp%3Ddrivesdk&sa=D&source=editors&ust=1758038820698988&usg=AOvVaw05K9VJBQNKKdHst43WZLeB',
                        icon: 'fab fa-google-drive'
                    },
                    {
                        name: 'PITVN Google Drive',
                        url: 'https://www.google.com/url?q=https://drive.google.com/file/d/1PWfjkoAUd55zbcgfLJK8GIQ0MzUsQVdF/view?usp%3Ddrivesdk&sa=D&source=editors&ust=1758038820699075&usg=AOvVaw3n1Lb6h5htF-BsfQ6L45AX',
                        icon: 'fab fa-google-drive'
                    },
                    {
                        name: 'PITVN Onedrive',
                        url: 'https://www.google.com/url?q=https://glennsferryschools-my.sharepoint.com/:u:/g/personal/billgates_glennsferryschools_onmicrosoft_com/EUVdzU8EyjNEr91NTlPWYhoB0NLLPOSA0FDiPJYJrYe9aA&sa=D&source=editors&ust=1758038820699155&usg=AOvVaw1YKSX7Z9zbiFK9w91cI5yH',
                        icon: 'fa-solid fa-cloud'
                    },
                    {
                        name: 'PITVN Onedrive',
                        url: 'https://www.google.com/url?q=https://icedubai-my.sharepoint.com/:u:/g/personal/billgates_icedubai_onmicrosoft_com/EWfHVJnzYWBAjvE27U7X3rMBr8sxPQb_oZUS45OM1tCOlg&sa=D&source=editors&ust=1758038820699242&usg=AOvVaw3J59MNkMY5jxWjSwtrX8a9',
                        icon: 'fa-solid fa-cloud'
                    }
                ]
            },
            {
                name: 'Professional Plus - Tiếng Việt',
                size: '2.3 GB',
                links: [
                    {
                        name: 'PITVN Google Drive',
                        url: 'https://www.google.com/url?q=https://drive.google.com/file/d/1dTP52BsflpdK9r0L6PLwcmSBgMhc9C82/view?usp%3Ddrivesdk&sa=D&source=editors&ust=1758038820700169&usg=AOvVaw2ANB0S_D4BU24FVCLKbvHz',
                        icon: 'fab fa-google-drive'
                    },
                    {
                        name: 'PITVN Google Drive',
                        url: 'https://www.google.com/url?q=https://drive.google.com/file/d/1vBGWXmp8Y7xaYCaIfFa7R0QMxlX-aZoe/view?usp%3Ddrivesdk&sa=D&source=editors&ust=1758038820700253&usg=AOvVaw1-brKIa5lGKGi29xBi8UM5',
                        icon: 'fab fa-google-drive'
                    },
                    {
                        name: 'PITVN Onedrive',
                        url: 'https://www.google.com/url?q=https://glennsferryschools-my.sharepoint.com/:u:/g/personal/billgates_glennsferryschools_onmicrosoft_com/EaQGr31-E09Fo2jJOOeSWs4BB4OHXJUV4ufrQef0meDa2w&sa=D&source=editors&ust=1758038820700332&usg=AOvVaw0-EWMs37_rk5FGUiBBjKiP',
                        icon: 'fa-solid fa-cloud'
                    },
                    {
                        name: 'PITVN Onedrive',
                        url: 'https://www.google.com/url?q=https://icedubai-my.sharepoint.com/:u:/g/personal/billgates_icedubai_onmicrosoft_com/EU_s6KHCC6pDj3yZhaGRH3cBc6bB27gboUpFxlL0rbYfOQ&sa=D&source=editors&ust=1758038820700424&usg=AOvVaw3ws6QZGBOvSNm_GNgx7qwq',
                        icon: 'fa-solid fa-cloud'
                    }
                ]
            },
        ]
    },
    // Microsoft Office - 2016
    {
        id: 'office2016',
        name: 'Microsoft Office 2016',
        description: 'Bộ ứng dụng văn phòng Office 2016 từ Quang Huy Blog PITVN',
        category: 'office',
        icon: 'fas fa-file-word',
        versions: [
            {
                name: 'Professional Plus',
                size: '2.3 GB',
                links: [
                    {
                        name: 'PITVN Google Drive',
                        url: 'https://www.google.com/url?q=https://drive.google.com/file/d/1ndn-EtY1ZVGginCbgfL3g2LlE_8XZtqs/view?usp%3Ddrivesdk&sa=D&source=editors&ust=1758038820706337&usg=AOvVaw1p-fQ6YdGX0iRzLXUMI8zi',
                        icon: 'fab fa-google-drive'
                    },
                    {
                        name: 'PITVN Google Drive',
                        url: 'https://www.google.com/url?q=https://drive.google.com/file/d/1giJ43Yr7g5_scGQiRRRtvHHYFmZxFL0m/view?usp%3Ddrivesdk&sa=D&source=editors&ust=1758038820706416&usg=AOvVaw13z_b0CB8JpyhVJyyxW-rw',
                        icon: 'fab fa-google-drive'
                    },
                    {
                        name: 'PITVN Onedrive',
                        url: 'https://www.google.com/url?q=https://glennsferryschools-my.sharepoint.com/:u:/g/personal/billgates_glennsferryschools_onmicrosoft_com/Edrqw3jHZEhJhiMtp6TyH8wBCZyRz4t-qP8EPzDeU6QrKA&sa=D&source=editors&ust=1758038820706488&usg=AOvVaw2vpafLqxjaqU0LiB_QvD7Y',
                        icon: 'fa-solid fa-cloud'
                    },
                    {
                        name: 'PITVN Onedrive',
                        url: 'https://www.google.com/url?q=https://icedubai-my.sharepoint.com/:u:/g/personal/billgates_icedubai_onmicrosoft_com/ES3yaXu9ostCqr0BoTeGResBNn37ymQgP9j9BrWYflc7XA&sa=D&source=editors&ust=1758038820706567&usg=AOvVaw3QJKudNb1HSX7SFzBA3w2I',
                        icon: 'fa-solid fa-cloud'
                    }
                ]
            },
            {
                name: 'Project Professional',
                size: '2.3 GB',
                links: [
                   {
                        name: 'PITVN Google Drive',
                        url: 'https://www.google.com/url?q=https://drive.google.com/file/d/1tCUQZcbccz05ao-D1mDqmGAo9ZOdjHQO/view?usp%3Ddrivesdk&sa=D&source=editors&ust=1758038820707305&usg=AOvVaw31t_6cl7Kjvve_fK5REreX',
                        icon: 'fab fa-google-drive'
                    },
                    {
                        name: 'PITVN Google Drive',
                        url: 'https://www.google.com/url?q=https://drive.google.com/file/d/1ktQvrQJOs08mN_eRnYMkRkU-X9-YWjho/view?usp%3Ddrivesdk&sa=D&source=editors&ust=1758038820707389&usg=AOvVaw1jycTh2CbiqAw4r2D6XYQs',
                        icon: 'fab fa-google-drive'
                    },
                    {
                        name: 'PITVN Onedrive',
                        url: 'https://www.google.com/url?q=https://glennsferryschools-my.sharepoint.com/:u:/g/personal/billgates_glennsferryschools_onmicrosoft_com/EcRBqBQmi1ZPjqtoZf9B_xYBc2jWCAYwyF2mSFDqJUR6LA&sa=D&source=editors&ust=1758038820707466&usg=AOvVaw265tojtUvPW7AGdw7XuZMe',
                        icon: 'fa-solid fa-cloud'
                    },
                    {
                        name: 'PITVN Onedrive',
                        url: 'https://www.google.com/url?q=https://icedubai-my.sharepoint.com/:u:/g/personal/billgates_icedubai_onmicrosoft_com/ESt74vQd0RpMgYLZVUx9o8gB_4rdlOo8d9LRCPgPuhoJDA&sa=D&source=editors&ust=1758038820707545&usg=AOvVaw0QYm-eovvBG_4ZwopJYR1K',
                        icon: 'fa-solid fa-cloud'
                    }
                ]
            },
            {
                name: 'Visio Professional',
                size: '2.3 GB',
                links: [
                    {
                        name: 'PITVN Google Drive',
                        url: 'https://www.google.com/url?q=https://drive.google.com/file/d/1Jcd5vQhY000szd4nEcEC2vyHVnx56TeU/view?usp%3Ddrivesdk&sa=D&source=editors&ust=1758038820708318&usg=AOvVaw1EpvsFhYo0dkK1PZ8XmHk7',
                        icon: 'fab fa-google-drive'
                    },
                    {
                        name: 'PITVN Google Drive',
                        url: 'https://www.google.com/url?q=https://drive.google.com/file/d/10BXpPV1uUb4ySFQ7UruxbKv2DtxLSED2/view?usp%3Ddrivesdk&sa=D&source=editors&ust=1758038820708398&usg=AOvVaw1N0Pr-CUz82cRcimD2PILt',
                        icon: 'fab fa-google-drive'
                    },
                    {
                        name: 'PITVN Onedrive',
                        url: 'https://www.google.com/url?q=https://glennsferryschools-my.sharepoint.com/:u:/g/personal/billgates_glennsferryschools_onmicrosoft_com/EQiy6XSEHT1Ir3Uc_bY_GUABWpxBIJDamQ9CsBX8lOB15w&sa=D&source=editors&ust=1758038820708475&usg=AOvVaw07b0fnNkuavb72lq1RiliY',
                        icon: 'fa-solid fa-cloud'
                    },
                    {
                        name: 'PITVN Onedrive',
                        url: 'https://www.google.com/url?q=https://icedubai-my.sharepoint.com/:u:/g/personal/billgates_icedubai_onmicrosoft_com/EQxxTiv8eYxLji64oUwDCAYBObqgMeyvKH1-QbcfmfMQvA&sa=D&source=editors&ust=1758038820708553&usg=AOvVaw31PrwNahZOAXlX8Ftg1d3v',
                        icon: 'fa-solid fa-cloud'
                    }
                ]
            },
            {
                name: 'Professional Plus - Tiếng Việt',
                size: '2.3 GB',
                links: [
                    {
                        name: 'PITVN Google Drive',
                        url: 'https://www.google.com/url?q=https://drive.google.com/file/d/1Fvoo7Ozjz5fypCu0nDdY0gG_1Wt78P3W/view?usp%3Ddrivesdk&sa=D&source=editors&ust=1758038820709337&usg=AOvVaw0zZWzBbPZbC-uID7S_oeTU',
                        icon: 'fab fa-google-drive'
                    },
                    {
                        name: 'PITVN Google Drive',
                        url: 'https://www.google.com/url?q=https://drive.google.com/file/d/1Z4tr_7dnHCY1EeaeUimQBHbhqro-7gVT/view?usp%3Ddrivesdk&sa=D&source=editors&ust=1758038820709406&usg=AOvVaw3u21HBDNjWNj6XKWeo2xr1',
                        icon: 'fab fa-google-drive'
                    },
                    {
                        name: 'PITVN Onedrive',
                        url: 'https://www.google.com/url?q=https://glennsferryschools-my.sharepoint.com/:u:/g/personal/billgates_glennsferryschools_onmicrosoft_com/ESiE8L-54RNHgfJmwzymZbwBJwOEhSUpigudAN9Yy2qk-w&sa=D&source=editors&ust=1758038820709472&usg=AOvVaw3hm3OtvmNBK8--zLxHw0kC',
                        icon: 'fa-solid fa-cloud'
                    },
                    {
                        name: 'PITVN Onedrive',
                        url: 'https://www.google.com/url?q=https://icedubai-my.sharepoint.com/:u:/g/personal/billgates_icedubai_onmicrosoft_com/EdXSn7CgpfJJsPydb4JVEEkBinaksxNDsbVVO857hfUB2w&sa=D&source=editors&ust=1758038820709542&usg=AOvVaw0-rEK0KmhnExheSClcxZ0i',
                        icon: 'fa-solid fa-cloud'
                    }
                ]
            },
        ]
    },
    // // Microsoft Office - for MACOS
    // {
    //     id: 'officeMacOs',
    //     name: 'Microsoft Office for Mac',
    //     description: 'Bộ ứng dụng văn phòng Office 2013 từ Quang Huy Blog PITVN',
    //     category: 'office',
    //     icon: 'fas fa-file-word',
    //     versions: [
    //         {
    //             name: 'Office 2016 Professional Plus',
    //             size: '2.0 GB',
    //             links: [
    //                 {
    //                     name: 'PITVN Google Drive',
    //                     url: '',
    //                     icon: 'fab fa-google-drive'
    //                 }
    //             ]
    //         }
    //     ]
    // },

    // // Phần mềm đồ họa - PITVN Community Resources
    // {
    //     id: 'photoshop',
    //     name: 'Adobe Photoshop',
    //     description: 'Phần mềm chỉnh sửa hình ảnh chuyên nghiệp từ PITVN Community Resources',
    //     category: 'graphics',
    //     icon: 'fas fa-paint-brush',
    //     versions: [
    //         {
    //             name: 'Photoshop 2024',
    //             size: '3.2 GB',
    //             links: [
    //                 {
    //                     name: 'PITVN Google Drive',
    //                     url: 'https://drive.google.com/drive/folders/1example_windows_aio',
    //                     icon: 'fab fa-google-drive'
    //                 },
    //                 {
    //                     name: 'PITVN Google Drive',
    //                     url: 'https://drive.google.com/drive/folders/1photoshop2024_pitvn',
    //                     icon: 'fab fa-google-drive'
    //                 },
    //                 {
    //                     name: 'PITVN MediaFire',
    //                     url: 'https://www.mediafire.com/folder/pitvn_photoshop2024',
    //                     icon: 'fas fa-download'
    //                 }
    //             ]
    //         },
    //         {
    //             name: 'Photoshop 2023',
    //             size: '2.9 GB',
    //             links: [
    //                 {
    //                     name: 'PITVN Google Drive',
    //                     url: 'https://drive.google.com/drive/folders/1example_windows_aio',
    //                     icon: 'fab fa-google-drive'
    //                 },
    //                 {
    //                     name: 'PITVN Google Drive',
    //                     url: 'https://drive.google.com/drive/folders/1photoshop2023_pitvn',
    //                     icon: 'fab fa-google-drive'
    //                 }
    //             ]
    //         },
    //         {
    //             name: 'Photoshop 2022',
    //             size: '2.7 GB',
    //             links: [
    //                 {
    //                     name: 'PITVN Google Drive',
    //                     url: 'https://drive.google.com/drive/folders/1example_windows_aio',
    //                     icon: 'fab fa-google-drive'
    //                 }
    //             ]
    //         }
    //     ]
    // },
    // {
    //     id: 'autocad',
    //     name: 'AutoCAD',
    //     description: 'Phần mềm thiết kế kỹ thuật và kiến trúc từ Quang Huy Blog PITVN',
    //     category: 'graphics',
    //     icon: 'fas fa-drafting-compass',
    //     versions: [
    //         {
    //             name: 'AutoCAD 2024',
    //             size: '4.1 GB',
    //             links: [
    //                 {
    //                     name: 'PITVN Google Drive',
    //                     url: 'https://drive.google.com/drive/folders/1example_windows_aio',
    //                     icon: 'fab fa-google-drive'
    //                 },
    //                 {
    //                     name: 'PITVN MediaFire',
    //                     url: 'https://www.mediafire.com/folder/pitvn_autocad2024',
    //                     icon: 'fas fa-download'
    //                 }
    //             ]
    //         },
    //         {
    //             name: 'AutoCAD 2023',
    //             size: '3.8 GB',
    //             links: [
    //                 {
    //                     name: 'PITVN Google Drive',
    //                     url: 'https://drive.google.com/drive/folders/1example_windows_aio',
    //                     icon: 'fab fa-google-drive'
    //                 }
    //             ]
    //         },
    //         {
    //             name: 'AutoCAD 2022',
    //             size: '3.6 GB',
    //             links: [
    //                 {
    //                     name: 'PITVN Google Drive',
    //                     url: 'https://drive.google.com/drive/folders/1example_windows_aio',
    //                     icon: 'fab fa-google-drive'
    //                 }
    //             ]
    //         }
    //     ]
    // },
    // {
    //     id: 'solidworks',
    //     name: 'SolidWorks',
    //     description: 'Phần mềm thiết kế 3D CAD chuyên nghiệp từ Quang Huy Blog PITVN',
    //     category: 'graphics',
    //     icon: 'fas fa-cube',
    //     versions: [
    //         {
    //             name: 'SolidWorks 2024',
    //             size: '8.5 GB',
    //             links: [
    //                 {
    //                     name: 'PITVN Google Drive',
    //                     url: 'https://drive.google.com/drive/folders/1example_windows_aio',
    //                     icon: 'fab fa-google-drive'
    //                 },
    //                 {
    //                     name: 'PITVN Google Drive',
    //                     url: 'https://drive.google.com/drive/folders/1example',
    //                     icon: 'fab fa-google-drive'
    //                 }
    //             ]
    //         },
    //         {
    //             name: 'SolidWorks 2023',
    //             size: '8.2 GB',
    //             links: [
    //                 {
    //                     name: 'PITVN Google Drive',
    //                     url: 'https://drive.google.com/drive/folders/1example_windows_aio',
    //                     icon: 'fab fa-google-drive'
    //                 }
    //             ]
    //         }
    //     ]
    // },
    // {
    //     id: 'sketchup',
    //     name: 'SketchUp',
    //     description: 'Phần mềm thiết kế 3D và mô hình hóa từ Quang Huy Blog PITVN',
    //     category: 'graphics',
    //     icon: 'fas fa-cube',
    //     versions: [
    //         {
    //             name: 'SketchUp Pro 2024',
    //             size: '1.2 GB',
    //             links: [
    //                 {
    //                     name: 'PITVN Google Drive',
    //                     url: 'https://drive.google.com/drive/folders/1example_windows_aio',
    //                     icon: 'fab fa-google-drive'
    //                 },
    //                 {
    //                     name: 'PITVN MediaFire',
    //                     url: 'https://www.mediafire.com/folder/pitvn_sketchup2024',
    //                     icon: 'fas fa-download'
    //                 }
    //             ]
    //         },
    //         {
    //             name: 'SketchUp Pro 2023',
    //             size: '1.1 GB',
    //             links: [
    //                 {
    //                     name: 'PITVN Google Drive',
    //                     url: 'https://drive.google.com/drive/folders/1example_windows_aio',
    //                     icon: 'fab fa-google-drive'
    //                 }
    //             ]
    //         }
    //     ]
    // },
    // {
    //     id: 'illustrator',
    //     name: 'Adobe Illustrator',
    //     description: 'Phần mềm thiết kế vector và đồ họa từ Quang Huy Blog PITVN',
    //     category: 'graphics',
    //     icon: 'fas fa-paint-brush',
    //     versions: [
    //         {
    //             name: 'Illustrator 2024',
    //             size: '2.7 GB',
    //             links: [
    //                 {
    //                     name: 'PITVN Google Drive',
    //                     url: 'https://drive.google.com/drive/folders/1example_windows_aio',
    //                     icon: 'fab fa-google-drive'
    //                 },
    //                 {
    //                     name: 'PITVN Google Drive',
    //                     url: 'https://drive.google.com/drive/folders/1example',
    //                     icon: 'fab fa-google-drive'
    //                 }
    //             ]
    //         },
    //         {
    //             name: 'Illustrator 2023',
    //             size: '2.5 GB',
    //             links: [
    //                 {
    //                     name: 'PITVN Google Drive',
    //                     url: 'https://drive.google.com/drive/folders/1example_windows_aio',
    //                     icon: 'fab fa-google-drive'
    //                 }
    //             ]
    //         }
    //     ]
    // },
    // {
    //     id: 'premiere',
    //     name: 'Adobe Premiere Pro',
    //     description: 'Phần mềm chỉnh sửa video chuyên nghiệp từ Quang Huy Blog PITVN',
    //     category: 'graphics',
    //     icon: 'fas fa-video',
    //     versions: [
    //         {
    //             name: 'Premiere Pro 2024',
    //             size: '4.2 GB',
    //             links: [
    //                 {
    //                     name: 'PITVN Google Drive',
    //                     url: 'https://drive.google.com/drive/folders/1example_windows_aio',
    //                     icon: 'fab fa-google-drive'
    //                 }
    //             ]
    //         }
    //     ]
    // },
    // {
    //     id: 'after_effects',
    //     name: 'Adobe After Effects',
    //     description: 'Phần mềm hiệu ứng và animation từ Quang Huy Blog PITVN',
    //     category: 'graphics',
    //     icon: 'fas fa-magic',
    //     versions: [
    //         {
    //             name: 'After Effects 2024',
    //             size: '3.8 GB',
    //             links: [
    //                 {
    //                     name: 'PITVN Google Drive',
    //                     url: 'https://drive.google.com/drive/folders/1example_windows_aio',
    //                     icon: 'fab fa-google-drive'
    //                 }
    //             ]
    //         }
    //     ]
    // },
    // {
    //     id: 'indesign',
    //     name: 'Adobe InDesign',
    //     description: 'Phần mềm thiết kế layout và xuất bản từ Quang Huy Blog PITVN',
    //     category: 'graphics',
    //     icon: 'fas fa-newspaper',
    //     versions: [
    //         {
    //             name: 'InDesign 2024',
    //             size: '2.9 GB',
    //             links: [
    //                 {
    //                     name: 'PITVN Google Drive',
    //                     url: 'https://drive.google.com/drive/folders/1example_windows_aio',
    //                     icon: 'fab fa-google-drive'
    //                 }
    //             ]
    //         }
    //     ]
    // },
    // {
    //     id: 'lightroom',
    //     name: 'Adobe Lightroom',
    //     description: 'Phần mềm chỉnh sửa ảnh RAW từ Quang Huy Blog PITVN',
    //     category: 'graphics',
    //     icon: 'fas fa-image',
    //     versions: [
    //         {
    //             name: 'Lightroom Classic 2024',
    //             size: '2.1 GB',
    //             links: [
    //                 {
    //                     name: 'PITVN Google Drive',
    //                     url: 'https://drive.google.com/drive/folders/1example_windows_aio',
    //                     icon: 'fab fa-google-drive'
    //                 }
    //             ]
    //         }
    //     ]
    // },

    // // Tools hỗ trợ - PITVN Community Resources
    // {
    //     id: 'winrar',
    //     name: 'WinRAR',
    //     description: 'Phần mềm nén và giải nén file từ PITVN Community Resources',
    //     category: 'tools',
    //     icon: 'fas fa-file-archive',
    //     versions: [
    //         {
    //             name: 'WinRAR 6.24',
    //             size: '3.2 MB',
    //             links: [
    //                 {
    //                     name: 'PITVN Google Drive',
    //                     url: 'https://drive.google.com/drive/folders/1example_windows_aio',
    //                     icon: 'fab fa-google-drive'
    //                 },
    //                 {
    //                     name: 'PITVN MediaFire',
    //                     url: 'https://www.mediafire.com/folder/pitvn_winrar',
    //                     icon: 'fas fa-download'
    //                 },
    //                 {
    //                     name: 'PITVN Google Drive',
    //                     url: 'https://drive.google.com/drive/folders/1winrar_pitvn',
    //                     icon: 'fab fa-google-drive'
    //                 }
    //             ]
    //         },
    //         {
    //             name: 'WinRAR 6.23',
    //             size: '3.1 MB',
    //             links: [
    //                 {
    //                     name: 'PITVN Google Drive',
    //                     url: 'https://drive.google.com/drive/folders/1example_windows_aio',
    //                     icon: 'fab fa-google-drive'
    //                 }
    //             ]
    //         }
    //     ]
    // },
    // {
    //     id: 'vlc',
    //     name: 'VLC Media Player',
    //     description: 'Trình phát media đa định dạng từ Quang Huy Blog PITVN',
    //     category: 'tools',
    //     icon: 'fas fa-play-circle',
    //     versions: [
    //         {
    //             name: 'VLC 3.0.20',
    //             size: '45 MB',
    //             links: [
    //                 {
    //                     name: 'PITVN Google Drive',
    //                     url: 'https://drive.google.com/drive/folders/1example_windows_aio',
    //                     icon: 'fab fa-google-drive'
    //                 },
    //                 {
    //                     name: 'PITVN Google Drive',
    //                     url: 'https://drive.google.com/drive/folders/1example',
    //                     icon: 'fab fa-google-drive'
    //                 }
    //             ]
    //         },
    //         {
    //             name: 'VLC 3.0.19',
    //             size: '44 MB',
    //             links: [
    //                 {
    //                     name: 'PITVN Google Drive',
    //                     url: 'https://drive.google.com/drive/folders/1example_windows_aio',
    //                     icon: 'fab fa-google-drive'
    //                 }
    //             ]
    //         }
    //     ]
    // },
    // {
    //     id: 'chrome',
    //     name: 'Google Chrome',
    //     description: 'Trình duyệt web phổ biến nhất từ Quang Huy Blog PITVN',
    //     category: 'tools',
    //     icon: 'fab fa-chrome',
    //     versions: [
    //         {
    //             name: 'Chrome Latest',
    //             size: '85 MB',
    //             links: [
    //                 {
    //                     name: 'PITVN Google Drive',
    //                     url: 'https://drive.google.com/drive/folders/1example_windows_aio',
    //                     icon: 'fab fa-google-drive'
    //                 },
    //                 {
    //                     name: 'PITVN MediaFire',
    //                     url: 'https://www.mediafire.com/folder/pitvn_chrome',
    //                     icon: 'fas fa-download'
    //                 }
    //             ]
    //         }
    //     ]
    // },
    // {
    //     id: 'firefox',
    //     name: 'Mozilla Firefox',
    //     description: 'Trình duyệt web mã nguồn mở từ Quang Huy Blog PITVN',
    //     category: 'tools',
    //     icon: 'fab fa-firefox',
    //     versions: [
    //         {
    //             name: 'Firefox Latest',
    //             size: '78 MB',
    //             links: [
    //                 {
    //                     name: 'PITVN Google Drive',
    //                     url: 'https://drive.google.com/drive/folders/1example_windows_aio',
    //                     icon: 'fab fa-google-drive'
    //                 },
    //                 {
    //                     name: 'PITVN Google Drive',
    //                     url: 'https://drive.google.com/drive/folders/1example',
    //                     icon: 'fab fa-google-drive'
    //                 }
    //             ]
    //         }
    //     ]
    // },
    // {
    //     id: '7zip',
    //     name: '7-Zip',
    //     description: 'Phần mềm nén file mã nguồn mở từ Quang Huy Blog PITVN',
    //     category: 'tools',
    //     icon: 'fas fa-file-archive',
    //     versions: [
    //         {
    //             name: '7-Zip 23.01',
    //             size: '1.4 MB',
    //             links: [
    //                 {
    //                     name: 'PITVN Google Drive',
    //                     url: 'https://drive.google.com/drive/folders/1example_windows_aio',
    //                     icon: 'fab fa-google-drive'
    //                 }
    //             ]
    //         }
    //     ]
    // },
    // {
    //     id: 'ccleaner',
    //     name: 'CCleaner',
    //     description: 'Phần mềm dọn dẹp hệ thống từ Quang Huy Blog PITVN',
    //     category: 'tools',
    //     icon: 'fas fa-broom',
    //     versions: [
    //         {
    //             name: 'CCleaner Pro 6.15',
    //             size: '25 MB',
    //             links: [
    //                 {
    //                     name: 'PITVN Google Drive',
    //                     url: 'https://drive.google.com/drive/folders/1example_windows_aio',
    //                     icon: 'fab fa-google-drive'
    //                 },
    //                 {
    //                     name: 'PITVN MediaFire',
    //                     url: 'https://www.mediafire.com/folder/pitvn_ccleaner',
    //                     icon: 'fas fa-download'
    //                 }
    //             ]
    //         }
    //     ]
    // },
    // {
    //     id: 'notepad_plus',
    //     name: 'Notepad++',
    //     description: 'Trình soạn thảo văn bản nâng cao từ Quang Huy Blog PITVN',
    //     category: 'tools',
    //     icon: 'fas fa-file-code',
    //     versions: [
    //         {
    //             name: 'Notepad++ 8.6.2',
    //             size: '4.2 MB',
    //             links: [
    //                 {
    //                     name: 'PITVN Google Drive',
    //                     url: 'https://drive.google.com/drive/folders/1example_windows_aio',
    //                     icon: 'fab fa-google-drive'
    //                 }
    //             ]
    //         }
    //     ]
    // },
    // {
    //     id: 'adobe_acrobat',
    //     name: 'Adobe Acrobat Reader',
    //     description: 'Trình đọc file PDF từ Quang Huy Blog PITVN',
    //     category: 'tools',
    //     icon: 'fas fa-file-pdf',
    //     versions: [
    //         {
    //             name: 'Acrobat Reader DC 2024',
    //             size: '180 MB',
    //             links: [
    //                 {
    //                     name: 'PITVN Google Drive',
    //                     url: 'https://drive.google.com/drive/folders/1example_windows_aio',
    //                     icon: 'fab fa-google-drive'
    //                 }
    //             ]
    //         }
    //     ]
    // },
    // {
    //     id: 'teamviewer',
    //     name: 'TeamViewer',
    //     description: 'Phần mềm điều khiển máy tính từ xa từ Quang Huy Blog PITVN',
    //     category: 'tools',
    //     icon: 'fas fa-desktop',
    //     versions: [
    //         {
    //             name: 'TeamViewer 15.50',
    //             size: '28 MB',
    //             links: [
    //                 {
    //                     name: 'PITVN Google Drive',
    //                     url: 'https://drive.google.com/drive/folders/1example_windows_aio',
    //                     icon: 'fab fa-google-drive'
    //                 }
    //             ]
    //         }
    //     ]
    // },
    // {
    //     id: 'idm',
    //     name: 'Internet Download Manager',
    //     description: 'Phần mềm tăng tốc download từ Quang Huy Blog PITVN',
    //     category: 'tools',
    //     icon: 'fas fa-download',
    //     versions: [
    //         {
    //             name: 'IDM 6.42 Build 8',
    //             size: '12 MB',
    //             links: [
    //                 {
    //                     name: 'PITVN Google Drive',
    //                     url: 'https://drive.google.com/drive/folders/1example_windows_aio',
    //                     icon: 'fab fa-google-drive'
    //                 },
    //                 {
    //                     name: 'PITVN MediaFire',
    //                     url: 'https://www.mediafire.com/folder/pitvn_idm',
    //                     icon: 'fas fa-download'
    //                 }
    //             ]
    //         }
    //     ]
    // }
];
