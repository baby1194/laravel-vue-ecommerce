<?php

namespace Tests\Browser;

use Illuminate\Foundation\Testing\DatabaseMigrations;
use Laravel\Dusk\Browser;
use Tests\DuskTestCase;

use function PHPUnit\Framework\assertTrue;

class BuyProductTest extends DuskTestCase
{
    /**
     * A Dusk test example.
     *
     * @return void
     */
    public function testWeSeeVue()
    {
        $this->browse(function (Browser $browser) {
            $browser->assertTrue()
            /*$browser->visit('http://127.0.0.1:8000')
                    ->assertSee('Laravel');*/
        });
    }
}
