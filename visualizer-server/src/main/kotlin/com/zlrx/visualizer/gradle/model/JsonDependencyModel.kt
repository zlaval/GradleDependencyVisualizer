package com.zlrx.visualizer.gradle.model


data class JsonDependencyModel(val nodes: List<Node>, val links: List<Link>)

data class Node(val id: String, val group: Int = 0)

data class Link(val source: String, val target: String, val value: Int = 5)