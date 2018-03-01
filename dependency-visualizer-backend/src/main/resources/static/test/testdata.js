var treeData = {
        "name": "groupid",
        "parent": "artifactId",
        "children": [{"name": "XYZBusiness:", "parent": "", "children": []}, {
            "name": "XYZModel:",
            "parent": "",
            "children": []
        }, {"name": "commons-lang3:3.7", "parent": "", "children": []}, {
            "name": "jackson-jaxrs-json-provider:2.8.4",
            "parent": "",
            "children": [{
                "name": "jackson-jaxrs-base:2.8.4",
                "parent": "jackson-jaxrs-json-provider:2.8.4",
                "children": [{
                    "name": "jackson-databind:2.9.1",
                    "parent": "jackson-jaxrs-base:2.8.4",
                    "children": [{
                        "name": "jackson-core:2.9.1",
                        "parent": "jackson-databind:2.9.1",
                        "children": []
                    }, {"name": "jackson-annotations:2.9.1", "parent": "jackson-databind:2.9.1", "children": []}]
                }, {"name": "jackson-core:2.9.1", "parent": "jackson-jaxrs-base:2.8.4", "children": []}]
            }, {
                "name": "jackson-module-jaxb-annotations:2.8.4",
                "parent": "jackson-jaxrs-json-provider:2.8.4",
                "children": [{
                    "name": "jackson-databind:2.9.1",
                    "parent": "jackson-module-jaxb-annotations:2.8.4",
                    "children": [{
                        "name": "jackson-core:2.9.1",
                        "parent": "jackson-databind:2.9.1",
                        "children": []
                    }, {"name": "jackson-annotations:2.9.1", "parent": "jackson-databind:2.9.1", "children": []}]
                }, {
                    "name": "jackson-core:2.9.1",
                    "parent": "jackson-module-jaxb-annotations:2.8.4",
                    "children": []
                }, {"name": "jackson-annotations:2.9.1", "parent": "jackson-module-jaxb-annotations:2.8.4", "children": []}]
            }, {
                "name": "jackson-databind:2.9.1",
                "parent": "jackson-jaxrs-json-provider:2.8.4",
                "children": [{
                    "name": "jackson-core:2.9.1",
                    "parent": "jackson-databind:2.9.1",
                    "children": []
                }, {"name": "jackson-annotations:2.9.1", "parent": "jackson-databind:2.9.1", "children": []}]
            }, {"name": "jackson-core:2.9.1", "parent": "jackson-jaxrs-json-provider:2.8.4", "children": []}]
        }, {
            "name": "jersey-media-json-jackson:2.22.4",
            "parent": "",
            "children": [{
                "name": "jackson-jaxrs-json-provider:2.8.4",
                "parent": "jersey-media-json-jackson:2.22.4",
                "children": [{
                    "name": "jackson-jaxrs-base:2.8.4",
                    "parent": "jackson-jaxrs-json-provider:2.8.4",
                    "children": [{
                        "name": "jackson-databind:2.9.1",
                        "parent": "jackson-jaxrs-base:2.8.4",
                        "children": [{
                            "name": "jackson-core:2.9.1",
                            "parent": "jackson-databind:2.9.1",
                            "children": []
                        }, {"name": "jackson-annotations:2.9.1", "parent": "jackson-databind:2.9.1", "children": []}]
                    }, {"name": "jackson-core:2.9.1", "parent": "jackson-jaxrs-base:2.8.4", "children": []}]
                }, {
                    "name": "jackson-module-jaxb-annotations:2.8.4",
                    "parent": "jackson-jaxrs-json-provider:2.8.4",
                    "children": [{
                        "name": "jackson-databind:2.9.1",
                        "parent": "jackson-module-jaxb-annotations:2.8.4",
                        "children": [{
                            "name": "jackson-core:2.9.1",
                            "parent": "jackson-databind:2.9.1",
                            "children": []
                        }, {"name": "jackson-annotations:2.9.1", "parent": "jackson-databind:2.9.1", "children": []}]
                    }, {
                        "name": "jackson-core:2.9.1",
                        "parent": "jackson-module-jaxb-annotations:2.8.4",
                        "children": []
                    }, {
                        "name": "jackson-annotations:2.9.1",
                        "parent": "jackson-module-jaxb-annotations:2.8.4",
                        "children": []
                    }]
                }, {
                    "name": "jackson-databind:2.9.1",
                    "parent": "jackson-jaxrs-json-provider:2.8.4",
                    "children": [{
                        "name": "jackson-core:2.9.1",
                        "parent": "jackson-databind:2.9.1",
                        "children": []
                    }, {"name": "jackson-annotations:2.9.1", "parent": "jackson-databind:2.9.1", "children": []}]
                }, {"name": "jackson-core:2.9.1", "parent": "jackson-jaxrs-json-provider:2.8.4", "children": []}]
            }, {
                "name": "jackson-jaxrs-base:2.8.4",
                "parent": "jersey-media-json-jackson:2.22.4",
                "children": [{
                    "name": "jackson-databind:2.9.1",
                    "parent": "jackson-jaxrs-base:2.8.4",
                    "children": [{
                        "name": "jackson-core:2.9.1",
                        "parent": "jackson-databind:2.9.1",
                        "children": []
                    }, {"name": "jackson-annotations:2.9.1", "parent": "jackson-databind:2.9.1", "children": []}]
                }, {"name": "jackson-core:2.9.1", "parent": "jackson-jaxrs-base:2.8.4", "children": []}]
            }, {
                "name": "jersey-common:2.22.4",
                "parent": "jersey-media-json-jackson:2.22.4",
                "children": [{
                    "name": "hk2-locator:2.4.0-b34",
                    "parent": "jersey-common:2.22.4",
                    "children": [{
                        "name": "javassist:3.21.0-GA",
                        "parent": "hk2-locator:2.4.0-b34",
                        "children": []
                    }, {
                        "name": "hk2-api:2.4.0-b34",
                        "parent": "hk2-locator:2.4.0-b34",
                        "children": [{
                            "name": "hk2-utils:2.4.0-b34",
                            "parent": "hk2-api:2.4.0-b34",
                            "children": []
                        }, {"name": "aopalliance-repackaged:2.4.0-b34", "parent": "hk2-api:2.4.0-b34", "children": []}]
                    }, {
                        "name": "javax.inject:2.4.0-b34",
                        "parent": "hk2-locator:2.4.0-b34",
                        "children": []
                    }, {
                        "name": "hk2-utils:2.4.0-b34",
                        "parent": "hk2-locator:2.4.0-b34",
                        "children": []
                    }, {"name": "aopalliance-repackaged:2.4.0-b34", "parent": "hk2-locator:2.4.0-b34", "children": []}]
                }, {
                    "name": "javax.ws.rs-api:2.0.1",
                    "parent": "jersey-common:2.22.4",
                    "children": []
                }, {
                    "name": "javax.annotation-api:1.2",
                    "parent": "jersey-common:2.22.4",
                    "children": []
                }, {
                    "name": "jersey-guava:2.22.4",
                    "parent": "jersey-common:2.22.4",
                    "children": []
                }, {
                    "name": "hk2-api:2.4.0-b34",
                    "parent": "jersey-common:2.22.4",
                    "children": [{
                        "name": "hk2-utils:2.4.0-b34",
                        "parent": "hk2-api:2.4.0-b34",
                        "children": []
                    }, {"name": "aopalliance-repackaged:2.4.0-b34", "parent": "hk2-api:2.4.0-b34", "children": []}]
                }, {
                    "name": "javax.inject:2.4.0-b34",
                    "parent": "jersey-common:2.22.4",
                    "children": []
                }, {"name": "osgi-resource-locator:1.0.1", "parent": "jersey-common:2.22.4", "children": []}]
            }, {
                "name": "jersey-entity-filtering:2.22.4",
                "parent": "jersey-media-json-jackson:2.22.4",
                "children": [{"name": "javax.ws.rs-api:2.0.1", "parent": "jersey-entity-filtering:2.22.4", "children": []}]
            }, {"name": "jackson-annotations:2.9.1", "parent": "jersey-media-json-jackson:2.22.4", "children": []}]
        }, {
            "name": "XYZBusiness:",
            "parent": "",
            "children": [{
                "name": "XYZModel:",
                "parent": "XYZBusiness:",
                "children": [{"name": "commons-lang3:3.7", "parent": "XYZModel:", "children": []}, {
                    "name": "nv-i18n:1.22",
                    "parent": "XYZModel:",
                    "children": []
                }, {"name": "arm-enums:0.0.1", "parent": "XYZModel:", "children": []}]
            }, {
                "name": "arm-utils:0.0.2",
                "parent": "XYZBusiness:",
                "children": [{"name": "commons-lang3:3.7", "parent": "arm-utils:0.0.2", "children": []}]
            }, {
                "name": "arm-common:0.1.7",
                "parent": "XYZBusiness:",
                "children": [{
                    "name": "arm-validation:0.0.2",
                    "parent": "arm-common:0.1.7",
                    "children": [{
                        "name": "commons-lang3:3.7",
                        "parent": "arm-validation:0.0.2",
                        "children": []
                    }, {"name": "commons-collections4:4.1", "parent": "arm-validation:0.0.2", "children": []}]
                }, {
                    "name": "jackson-datatype-jsr310:2.8.4",
                    "parent": "arm-common:0.1.7",
                    "children": [{
                        "name": "jackson-databind:2.9.1",
                        "parent": "jackson-datatype-jsr310:2.8.4",
                        "children": [{
                            "name": "jackson-core:2.9.1",
                            "parent": "jackson-databind:2.9.1",
                            "children": []
                        }, {"name": "jackson-annotations:2.9.1", "parent": "jackson-databind:2.9.1", "children": []}]
                    }, {
                        "name": "jackson-core:2.9.1",
                        "parent": "jackson-datatype-jsr310:2.8.4",
                        "children": []
                    }, {"name": "jackson-annotations:2.9.1", "parent": "jackson-datatype-jsr310:2.8.4", "children": []}]
                }, {"name": "commons-collections4:4.1", "parent": "arm-common:0.1.7", "children": []}]
            }, {
                "name": "arm-validation:0.0.2",
                "parent": "XYZBusiness:",
                "children": [{
                    "name": "commons-lang3:3.7",
                    "parent": "arm-validation:0.0.2",
                    "children": []
                }, {"name": "commons-collections4:4.1", "parent": "arm-validation:0.0.2", "children": []}]
            }, {
                "name": "arm-decision-tree:0.0.1",
                "parent": "XYZBusiness:",
                "children": [{
                    "name": "commons-lang3:3.7",
                    "parent": "arm-decision-tree:0.0.1",
                    "children": []
                }, {"name": "arm-enums:0.0.1", "parent": "arm-decision-tree:0.0.1", "children": []}]
            }, {"name": "commons-lang3:3.7", "parent": "XYZBusiness:", "children": []}, {
                "name": "arm-openam:0.0.1",
                "parent": "XYZBusiness:",
                "children": []
            }, {
                "name": "APIRESTClient:0.1.4-SNAPSHOT",
                "parent": "XYZBusiness:",
                "children": []
            }, {
                "name": "AccessRESTClient:0.0.1-35-g3b7d4fc",
                "parent": "XYZBusiness:",
                "children": []
            }, {
                "name": "TransactionRESTClient:0.0.1-131-g30f56e0",
                "parent": "XYZBusiness:",
                "children": []
            }, {
                "name": "ConfigClient:0.2.4-5-g1fd9b7e",
                "parent": "XYZBusiness:",
                "children": []
            }, {"name": "snakeyaml:1.19", "parent": "XYZBusiness:", "children": []}]
        }, {
            "name": "XYZModel:",
            "parent": "",
            "children": [{"name": "commons-lang3:3.7", "parent": "XYZModel:", "children": []}, {
                "name": "nv-i18n:1.22",
                "parent": "XYZModel:",
                "children": []
            }, {"name": "arm-enums:0.0.1", "parent": "XYZModel:", "children": []}]
        }, {
            "name": "swagger-jaxrs2:2.0.0-rc4",
            "parent": "",
            "children": [{
                "name": "swagger-integration:2.0.0-rc4",
                "parent": "swagger-jaxrs2:2.0.0-rc4",
                "children": [{
                    "name": "swagger-core:2.0.0-rc4",
                    "parent": "swagger-integration:2.0.0-rc4",
                    "children": [{
                        "name": "commons-lang3:3.7",
                        "parent": "swagger-core:2.0.0-rc4",
                        "children": []
                    }, {
                        "name": "jackson-dataformat-yaml:2.9.1",
                        "parent": "swagger-core:2.0.0-rc4",
                        "children": [{
                            "name": "jackson-core:2.9.1",
                            "parent": "jackson-dataformat-yaml:2.9.1",
                            "children": []
                        }, {"name": "snakeyaml:1.19", "parent": "jackson-dataformat-yaml:2.9.1", "children": []}]
                    }, {
                        "name": "jackson-databind:2.9.1",
                        "parent": "swagger-core:2.0.0-rc4",
                        "children": [{
                            "name": "jackson-core:2.9.1",
                            "parent": "jackson-databind:2.9.1",
                            "children": []
                        }, {"name": "jackson-annotations:2.9.1", "parent": "jackson-databind:2.9.1", "children": []}]
                    }, {
                        "name": "swagger-models:2.0.0-rc4",
                        "parent": "swagger-core:2.0.0-rc4",
                        "children": [{
                            "name": "jackson-annotations:2.9.1",
                            "parent": "swagger-models:2.0.0-rc4",
                            "children": []
                        }]
                    }, {
                        "name": "jackson-annotations:2.9.1",
                        "parent": "swagger-core:2.0.0-rc4",
                        "children": []
                    }, {
                        "name": "swagger-annotations:2.0.0-rc4",
                        "parent": "swagger-core:2.0.0-rc4",
                        "children": []
                    }, {
                        "name": "slf4j-api:1.7.25",
                        "parent": "swagger-core:2.0.0-rc4",
                        "children": []
                    }, {"name": "validation-api:1.1.0.Final", "parent": "swagger-core:2.0.0-rc4", "children": []}]
                }, {
                    "name": "swagger-models:2.0.0-rc4",
                    "parent": "swagger-integration:2.0.0-rc4",
                    "children": [{
                        "name": "jackson-annotations:2.9.1",
                        "parent": "swagger-models:2.0.0-rc4",
                        "children": []
                    }]
                }, {
                    "name": "reflections:0.9.11",
                    "parent": "swagger-integration:2.0.0-rc4",
                    "children": [{
                        "name": "javassist:3.21.0-GA",
                        "parent": "reflections:0.9.11",
                        "children": []
                    }, {"name": "guava:20.0", "parent": "reflections:0.9.11", "children": []}]
                }]
            }, {
                "name": "jackson-databind:2.9.1",
                "parent": "swagger-jaxrs2:2.0.0-rc4",
                "children": [{
                    "name": "jackson-core:2.9.1",
                    "parent": "jackson-databind:2.9.1",
                    "children": []
                }, {"name": "jackson-annotations:2.9.1", "parent": "jackson-databind:2.9.1", "children": []}]
            }, {
                "name": "swagger-models:2.0.0-rc4",
                "parent": "swagger-jaxrs2:2.0.0-rc4",
                "children": [{"name": "jackson-annotations:2.9.1", "parent": "swagger-models:2.0.0-rc4", "children": []}]
            }, {
                "name": "reflections:0.9.11",
                "parent": "swagger-jaxrs2:2.0.0-rc4",
                "children": [{
                    "name": "javassist:3.21.0-GA",
                    "parent": "reflections:0.9.11",
                    "children": []
                }, {"name": "guava:20.0", "parent": "reflections:0.9.11", "children": []}]
            }, {
                "name": "javassist:3.21.0-GA",
                "parent": "swagger-jaxrs2:2.0.0-rc4",
                "children": []
            }, {"name": "swagger-annotations:2.0.0-rc4", "parent": "swagger-jaxrs2:2.0.0-rc4", "children": []}]
        }]
    }

;