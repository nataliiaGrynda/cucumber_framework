package runners;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;
import org.junit.runner.RunWith;

@RunWith(Cucumber.class)//makes it runnable, comes from junit
@CucumberOptions(//defines what needs to be run// comes from cucumber
  features = "src/test/resources/features",
  glue = "steps",
  tags = "@temp",//find all the cenarios with the gives tag. for each cenario found with given text, it emidiatly finds the step implementattion for it with glue
  dryRun = false , //don't run the code but give me the missing steps, checks if any steps missing
  monochrome = false, //plays with the colors.., it shows console output better
  plugin = {"html:target/cucumber-reports",// i specify the code
    "json:target/cucumber-reports/Cucumber.json",
    "pretty"}
)

public class Runner {
}
