import org.jetbrains.kotlin.gradle.tasks.KotlinCompile

plugins {
    kotlin("jvm") version "1.4.30" apply false
}

subprojects kotlinConfig@{
    if (isNotKotlinProject()) return@kotlinConfig

    extra.apply {
        set("ktorVersion", "1.5.1")
        set("logbackVersion", "1.2.3")
    }

    group = "cash.bookkeeper"

    apply(plugin = "kotlin")

    repositories {
        jcenter()
    }

    dependencies {
        "implementation"(kotlin("stdlib-jdk8"))

        "testImplementation"(kotlin("test-junit"))
    }

    configure<JavaPluginExtension> {
        sourceCompatibility = JavaVersion.VERSION_1_8
        targetCompatibility = JavaVersion.VERSION_1_8
    }

    tasks.withType<KotlinCompile> {
        kotlinOptions {
            jvmTarget = JavaVersion.VERSION_1_8.toString()
        }
    }
}

fun Project.isNotKotlinProject() = name == "applications" || name == "components" || name == "frontend"
