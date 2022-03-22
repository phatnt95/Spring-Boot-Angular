package com.example.springboot;


import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;


@SpringBootApplication
public class SpringBootCrmApplication {

	public static void main(String[] args) {
		SpringApplication.run(SpringBootCrmApplication.class, args);
		//configGenTS();
	}

//	public static void configGenTS() {
//		Rest2tsGenerator tsGenerator = new Rest2tsGenerator();
//		//ava Classes filtering
//		tsGenerator.setModelClassesCondition(new ExtendsJavaTypeFilter(Student.class));
//		tsGenerator.setRestClassesCondition(new ExtendsJavaTypeFilter(StudentController.class));
//
//		// Java model classes converter setup
//		JacksonObjectMapper jacksonObjectMapper = new JacksonObjectMapper();
//		jacksonObjectMapper.setFieldsVisibility(JsonAutoDetect.Visibility.ANY);
//		ModelClassesToTsInterfacesConverter modelClassesConverter = new ModelClassesToTsInterfacesConverter(jacksonObjectMapper);
//		tsGenerator.setModelClassesConverter(modelClassesConverter);
//
//		// Spring REST controllers converter
//		SpringRestToTsConverter restClassesConverter = new SpringRestToTsConverter(new Angular4ImplementationGenerator());
//		tsGenerator.setRestClassesConverter(restClassesConverter);
//
//		// set of java root packages for class scanning
//		Set<String> javaPackageSet = Collections.singleton("com.example.springboot");
//
//		try {
//			tsGenerator.generate(javaPackageSet, Paths.get("..angular-app/src/app/generated-api"));
//		} catch (IOException e) {
//			e.printStackTrace();
//		}
//	}

}
