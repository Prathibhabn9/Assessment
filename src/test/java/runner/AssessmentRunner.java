package runner;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.*;


	@RunWith(Cucumber.class)
	@CucumberOptions(
		features="src/test/java/features/Assessment.feature",
				glue= {"stepdefinition"},

		tags= {"@RegressionTest"},
		plugin = { "pretty", "html:target/cucumber-pretty"}) //To create basic report
		
public class AssessmentRunner {

}
