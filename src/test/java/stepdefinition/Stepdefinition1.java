package stepdefinition;

import static org.junit.Assert.assertTrue;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class Stepdefinition1 {
	WebDriver driver;
	String HomepageTitle;

	@Given("^User is on https://www\\.calculator\\.net/ page$")
	public void user_is_on_https_www_calculator_net_page() throws Throwable {
		System.setProperty("webdriver.chrome.driver", "./Dependencies/chromedriver.exe");
		driver = new ChromeDriver();
		driver.get("https://www.calculator.net/");
		HomepageTitle = driver.getTitle();
		System.out.println(HomepageTitle);

		assertTrue(HomepageTitle.contains("Calculator"));

	}

	@Given("^clicks on BMI Calculator$")
	public void clicks_on_BMI_Calculator() throws Throwable {
		driver.findElement(By.linkText("BMI Calculator")).click();
		Thread.sleep(5000);
		HomepageTitle = driver.getTitle();
		System.out.println(HomepageTitle);
	}

	@Given("^clicks on Metrics$")
	public void clicks_on_Metrics() throws Throwable {
		driver.findElement(By.linkText("Metric Units")).click();
	}

	@When("^User enters Age(\\d+), Height(\\d+) and Weight(\\d+)$")
	public void user_enters_Age_Height_and_Weight(int arg1, int arg2, int arg3) throws Throwable {

		driver.findElement(By.name("cage")).clear();
		driver.findElement(By.name("cage")).sendKeys(String.valueOf(arg1));
		driver.findElement(By.name("cheightmeter")).clear();
		driver.findElement(By.name("cheightmeter")).sendKeys(String.valueOf(arg2));
		driver.findElement(By.name("ckg")).clear();
		driver.findElement(By.name("ckg")).sendKeys(String.valueOf(arg3));
	}

	@When("^User clicks on Calculate BMI button$")
	public void user_clicks_on_Calculate_BMI_button() throws Throwable {
		driver.findElement(By.xpath(".//*[@value='Calculate']")).click();

	}

	@Then("^BMI Result will be shown$")
	public void bmi_Result_will_be_shown() throws Throwable {
		String res = driver.findElement(By.className("rightresult")).getText();
		System.out.println(res);
		
	}

	@Then("^Close the Browser$")
	public void close_the_Browser() throws Throwable {
		driver.close();
	}

}
