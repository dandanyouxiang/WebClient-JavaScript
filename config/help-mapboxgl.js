var config = {
    name: "",
    title: "MapGIS WebClinet-MapboxGL演示网站",
    mapmode: "mapbox",
    childs: [{
            name: "几何图元",
            materialicon: "bubble_chart",
            folder: "geometry",
            leaffolder: false,
            childs: [{
                    name: "样式库与字体库",
                    materialicon: "bubble_chart",
                    folder: "sprite",
                    leaffolder: true,
                    childs: [{
                        name: "MapboxGL样式库",
                        file: "mapbox",
                        diffcult: "1",
                        detail: "",
                        icon: "mapbox.png",
                        update: "最后更新时间：2018-06-07"
                    }, {
                        name: "MapGIS样式库",
                        file: "mapgis",
                        diffcult: "1",
                        detail: "",
                        icon: "mapgis.png",
                        update: "最后更新时间：2018-06-07"
                    }]
                },
                {
                    name: "内置几何Object",
                    materialicon: "bubble_chart",
                    folder: "graphic",
                    leaffolder: true,
                    childs: [{
                        name: "点Circle",
                        file: "circle",
                        diffcult: "1",
                        detail: "",
                        icon: "circle.png",
                        update: "最后更新时间：2018-06-07"
                    }, {
                        name: "线Line",
                        file: "line",
                        diffcult: "1",
                        detail: "",
                        icon: "line.png",
                        update: "最后更新时间：2018-06-07"
                    }, {
                        name: "面Fill",
                        file: "fill",
                        diffcult: "1",
                        detail: "",
                        icon: "fill.png",
                        update: "最后更新时间：2018-06-07"
                    }, {
                        name: "面立体Fill-Extrusion",
                        file: "fillextrusion",
                        diffcult: "1",
                        detail: "",
                        icon: "fillextrusion.png",
                        update: "最后更新时间：2018-06-07"
                    }, {
                        name: "注记-Symbol",
                        file: "symbol",
                        diffcult: "1",
                        detail: "",
                        icon: "symbol.png",
                        update: "最后更新时间：2018-06-07"
                    }, {
                        name: "背景-Background",
                        file: "background",
                        diffcult: "1",
                        detail: "",
                        icon: "background.png",
                        update: "最后更新时间：2018-06-07"
                    }]
                },
                {
                    name: "通用几何GeoJSON",
                    materialicon: "bubble_chart",
                    folder: "geojson",
                    leaffolder: true,
                    childs: [{
                        name: "Point",
                        file: "point",
                        diffcult: "1",
                        detail: "给定一个geojson格式的经纬坐标点，将其展示在leaflet上。",
                        icon: "point.png",
                        mardown: "E01GeoPoint.md",
                        update: "最后更新时间：2018-05-10"
                    }, {
                        name: "Line",
                        file: "line",
                        diffcult: "1",
                        detail: "将地理位置的坐标数组(二维)以geojson格式加载进leaflet。",
                        icon: "line.png",
                        mardown: "E01GeoPoint.md",
                        update: "最后更新时间：2018-05-10"
                    }, {
                        name: "Polygon",
                        file: "polygon",
                        diffcult: "1",
                        detail: "一个环形坐标数组的数组(三维)以geojson格式加载进leaflet。针对“带洞区”，最好采取外圈顺时针，内圈逆时针的方式",
                        icon: "polygon.png",
                        mardown: "E01GeoPoint.md",
                        update: "最后更新时间：2018-05-10"
                    }, {
                        name: "MultiPoint",
                        file: "multipoint",
                        diffcult: "1",
                        detail: "将位置坐标组成二维数组以geojson格式加载进leafelt中。",
                        icon: "multipoint.png",
                        mardown: "E01GeoPoint.md",
                        update: "最后更新时间：2018-05-10"
                    }, {
                        name: "MultiLine",
                        file: "multiline",
                        diffcult: "1",
                        detail: "将线坐标数组的数组(三维)以geojson格式加载进leaflet。",
                        icon: "multiline.png",
                        update: "最后更新时间：2018-05-10"
                    }, {
                        name: "MultiPolygon",
                        file: "multipolygon",
                        diffcult: "2",
                        detail: "将面坐标数组的数组(四维)以geojson格式加载进leaflet。",
                        icon: "multipolygon.png",
                        update: "最后更新时间：2018-05-10"
                    }, {
                        name: "FeatureCollection",
                        file: "featurecollection",
                        diffcult: "2",
                        detail: "以Geojson特征集合数据格式将数据加载进leaflet。",
                        icon: "featurecollection.png",
                        update: "最后更新时间：2018-05-10"
                    }, {
                        name: "地理数据转换",
                        file: "transform",
                        diffcult: "2",
                        detail: "将特定或非特定格式的地理数据转换为标准的geojson格式加载进leaflet。",
                        icon: "transform.png",
                        update: "最后更新时间：2018-05-10"
                    }, {
                        name: "JsonParse",
                        file: "jsonparse",
                        diffcult: "2",
                        detail: "接受一个标准格式的JSON字符串，并返回解析后标准的JavaScript对象，可用于geojson数据的解析。",
                        icon: "jsonparse.png",
                        update: "最后更新时间：2018-05-10"
                    }]
                }
            ]
        },
        {
            name: "客户端可视化",
            materialicon: "camera",
            folder: "dataview",
            leaffolder: false,
            childs: [{
                    name: "Mapv",
                    materialicon: "camera",
                    folder: "mapv",
                    leaffolder: true,
                    childs: [{
                        name: "轨迹汇聚",
                        file: "path_converge",
                        diffcult: "1",
                        detail: "",
                        icon: "path_converge.png",
                        update: "最后更新时间：2018-05-12"
                    }, {
                        name: "热力图",
                        file: "heater",
                        diffcult: "1",
                        detail: "",
                        icon: "heater.png",
                        update: "最后更新时间：2018-07-4"
                    }, {
                        name: "迁移图",
                        file: "migrate",
                        diffcult: "1",
                        detail: "",
                        icon: "migrate.png",
                        update: "最后更新时间：2018-05-12"
                    }, {
                        name: "区数据渲染",
                        file: "render_polygon",
                        diffcult: "1",
                        detail: "",
                        icon: "render_polygon.png",
                        update: "最后更新时间：2018-05-12"
                    }, {
                        name: "点数据播放",
                        file: "point_animate",
                        diffcult: "1",
                        detail: "",
                        icon: "point_animate.png",
                        update: "最后更新时间：2018-05-12"
                    }, {
                        name: "方形网格密度",
                        file: "point_grid",
                        diffcult: "1",
                        detail: "",
                        icon: "point_grid.png",
                        update: "最后更新时间：2018-05-12"
                    }, {
                        name: "蜂窝形密度",
                        file: "point_honeycomb",
                        diffcult: "1",
                        detail: "",
                        icon: "point_honeycomb.png",
                        update: "最后更新时间：2018-05-12"
                    }, {
                        name: "点重叠播放",
                        file: "point_mutilanimate",
                        diffcult: "1",
                        detail: "",
                        icon: "point_mutilanimate.png",
                        update: "最后更新时间：2018-05-12"
                    }, {
                        name: "点微博数据",
                        file: "point_weibo",
                        diffcult: "1",
                        detail: "",
                        icon: "point_weibo.png",
                        update: "最后更新时间：2018-05-12"
                    }, {
                        name: "多值统计线",
                        file: "countline",
                        diffcult: "1",
                        detail: "",
                        icon: "countline.png",
                        update: "最后更新时间：2018-05-12"
                    }, {
                        name: "单一迁移轨迹",
                        file: "simplemigrate",
                        diffcult: "1",
                        detail: "",
                        icon: "simplemigrate.png",
                        update: "最后更新时间：2018-05-12"
                    }, {
                        name: "动态轨迹",
                        file: "tracker",
                        diffcult: "1",
                        detail: "",
                        icon: "tracker.png",
                        update: "最后更新时间：2018-05-12"
                    }, {
                        name: "交通轨迹",
                        file: "trackerline",
                        diffcult: "1",
                        detail: "",
                        icon: "trackerline.png",
                        update: "最后更新时间：2018-05-12"
                    }]
                },
                {
                    name: "Echarts Gl",
                    materialicon: "camera",
                    folder: "echartsgl",
                    leaffolder: true,
                    childs: [{
                            name: "开普敦出租车",
                            file: "capton",
                            diffcult: "1",
                            detail: "针对出租车轨迹与建筑进行动态显示",
                            icon: "capton.png",
                            update: "最后更新时间：2018-05-24"
                        }, {
                            name: "伦敦飞机航线",
                            file: "flight",
                            diffcult: "1",
                            detail: "针对Uber的数据进行的飞行航线的可视化",
                            icon: "flight.png",
                            update: "最后更新时间：2018-05-24"
                        }, {
                            name: "上海房价图",
                            file: "shanghai",
                            diffcult: "1",
                            detail: "针对上海的房价进行统计图可视化",
                            icon: "shanghai.png",
                            update: "最后更新时间：2018-05-24"
                        }, {
                            name: "全国微博签到图",
                            file: "weibo",
                            diffcult: "1",
                            detail: "针对全国微博数据的签到可视化",
                            icon: "weibo.png",
                            update: "最后更新时间：2018-05-24"
                        }, {
                            name: "彩色建筑图",
                            file: "buildings",
                            diffcult: "1",
                            detail: "针对建筑模型的彩色可视化",
                            icon: "buildings.png",
                            update: "最后更新时间：2018-05-24"
                        }, {
                            name: "纽约公交夜景",
                            file: "newyork",
                            diffcult: "1",
                            detail: "针对纽约公交夜景的彩色可视化",
                            icon: "newyork.png",
                            update: "最后更新时间：2018-06-21"
                        }, {
                            name: "北京公交夜景",
                            file: "beijing",
                            diffcult: "1",
                            detail: "针对北京公交夜景的彩色可视化",
                            icon: "beijing.png",
                            update: "最后更新时间：2018-06-27"
                        }, {
                            name: "世界航线",
                            file: "lines",
                            diffcult: "1",
                            detail: "针对世界航线的彩色可视化",
                            icon: "lines.png",
                            update: "最后更新时间：2018-07-06"
                        }
                        /* , {
                                                name: "世界航线3d",
                                                file: "lines3d",
                                                diffcult: "1",
                                                detail: "针对世界航线的3d彩色可视化",
                                                icon: "lines3d.png",
                                                update: "最后更新时间：2018-07-06"
                                            } */
                    ]
                }
            ]
        },
        {
            name: "客户端空间分析",
            materialicon: "iso",
            folder: "analysis",
            leaffolder: true,
            childs: [{
                name: "缓冲区分析",
                file: "buffer",
                diffcult: "1",
                detail: "给定一个缓冲半径进行缓冲区分析. 单位支持 miles 米,kilometers 千米,degrees 度.",
                icon: "buffer.png",
                update: "最后更新时间：2018-05-05"
            }, {
                name: "泰森多边形分析",
                file: "voronoi",
                diffcult: "2",
                detail: "针对给定的点生成泰森多边形,请注意一定要传入外包矩形bbox参数",
                icon: "voronoi.png",
                update: "最后更新时间：2018-05-05"
            }, {
                name: "TIN三角网分析",
                file: "tin",
                diffcult: "1",
                detail: "TIN方法将无重复点的散乱数据点集按某种规则(如Delaunay 规则) 进行三角剖分，使这些散乱点形成连续但不重叠的不规则三角面片网，并以此来描述3D 物体的表面。",
                icon: "tin.png",
                update: "最后更新时间：2018-05-05"
            }, {
                name: "中心点提取",
                file: "centroid",
                diffcult: "1",
                detail: "计算给定GeoJSON的数据中心支持所有的GeoJSON类型",
                icon: "centroid.png",
                update: "最后更新时间：2018-05-05"
            }, {
                name: "插值分析",
                file: "along",
                diffcult: "1",
                detail: "线插值操作是通过 计算起点-终点长度,然后再根据长度等分计算需要插值的点,最后再把这些点插入到原始数据中.",
                icon: "along.png",
                update: "最后更新时间：2018-05-05"
            }]
        },
        {
            name: "矢量瓦片",
            materialicon: "layers",
            folder: "vectortile",
            leaffolder: true,
            childs: [{
                name: "基本介绍",
                file: "index",
                diffcult: "1",
                detail: "",
                icon: "index.gif",
                update: "最后更新时间：2018-06-27,如有问题请咨询创新中心"
            }, {
                name: "基本架构",
                file: "framework",
                diffcult: "2",
                detail: "",
                icon: "framework.gif",
                update: "最后更新时间：2018-06-27,如有问题请咨询创新中心"
            }, {
                name: "基本使用",
                file: "product",
                diffcult: "2",
                detail: "",
                icon: "product.gif",
                update: "最后更新时间：2018-06-27,如有问题请咨询创新中心"
            }, {
                name: "基本知识",
                file: "base",
                diffcult: "2",
                detail: "",
                icon: "base.gif",
                update: "最后更新时间：2018-06-27,如有问题请咨询创新中心"
            }, {
                name: "基本样式",
                file: "style",
                diffcult: "2",
                detail: "",
                icon: "style.gif",
                update: "最后更新时间：2018-06-27,如有问题请咨询创新中心"
            }, {
                name: "测试性能与效率",
                file: "effect",
                diffcult: "3",
                detail: "",
                icon: "effect.gif",
                update: "最后更新时间：2018-06-27,如有问题请咨询创新中心"
            }]
        },
        {
            name: "实时数据分析Els",
            materialicon: "search",
            folder: "elasticsearch",
            leaffolder: true,
            childs: [{
                name: "首页",
                file: "index",
                diffcult: "1",
                detail: "",
                icon: "index.gif",
                update: "最后更新时间：2018-06-27,如有问题请咨询创新中心"
            },{
                name: "聚合",
                file: "base",
                diffcult: "2",
                detail: "",
                icon: "base.gif",
                update: "最后更新时间：2018-06-27,如有问题请咨询创新中心"
            },{
                name: "聚合用例",
                file: "aggsexamples",
                diffcult: "2",
                detail: "",
                icon: "aggsexamples.gif",
                update: "最后更新时间：2018-06-27,如有问题请咨询创新中心"
            },{
                name: "地图操作基本概念",
                file: "gisbase",
                diffcult: "2",
                detail: "",
                icon: "gisbase.gif",
                update: "最后更新时间：2018-06-27,如有问题请咨询创新中心"
            },{
                name: "官方接口",
                file: "command",
                diffcult: "2",
                detail: "",
                icon: "command.gif",
                update: "最后更新时间：2018-06-27,如有问题请咨询创新中心"
            },{
                name: "中地接口",
                file: "webclient",
                diffcult: "2",
                detail: "",
                icon: "webclient.gif",
                update: "最后更新时间：2018-06-27,如有问题请咨询创新中心"
            }]
        }
    ]
};