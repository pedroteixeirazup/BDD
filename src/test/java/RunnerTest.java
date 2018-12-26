import cucumber.api.CucumberOptions;
import cucumber.api.SnippetType;
import cucumber.api.junit.Cucumber;
import org.junit.runner.RunWith;

@RunWith(Cucumber.class)
@CucumberOptions(plugin = {"pretty","html:target/report-html","json:target/report.json"},
        monochrome = false,
        snippets = SnippetType.CAMELCASE,
        features = "src/test/java/resource/alugar_filme.feature",
        dryRun = false,
        strict = false,
        tags = {}
)
public class RunnerTest {
}