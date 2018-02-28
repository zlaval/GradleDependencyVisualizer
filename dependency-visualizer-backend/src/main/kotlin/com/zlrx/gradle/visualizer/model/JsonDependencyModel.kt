package com.zlrx.gradle.visualizer.model


data class JsonDependencyModel(val name: String, val parent: String, val children: List<JsonDependencyModel> = ArrayList())



