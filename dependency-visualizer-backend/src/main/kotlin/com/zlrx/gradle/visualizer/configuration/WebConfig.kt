package com.zlrx.gradle.visualizer.configuration

import org.springframework.web.servlet.config.annotation.CorsRegistry
import org.springframework.web.servlet.config.annotation.WebMvcConfigurerAdapter

//@Component
class WebConfig : WebMvcConfigurerAdapter() {

    override fun addCorsMappings(registry: CorsRegistry?) {
        registry?.addMapping("/**")
    }

}