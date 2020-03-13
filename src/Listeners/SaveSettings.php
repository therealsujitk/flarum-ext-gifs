<?php

namespace Therealsujitk\GIFs\Listeners;

use Flarum\Api\Serializer\UserSerializer;
use Flarum\Api\Event\Serializing;
use Flarum\Settings\SettingsRepositoryInterface;
use Illuminate\Contracts\Events\Dispatcher;

class SaveSettings {
	protected $settings;

	public function __construct(SettingsRepositoryInterface $settings) {
		$this->settings = $settings;
	}

	public function subscribe(Dispatcher $events) {
		$events->listen(Serializing::class, [$this, 'addAttributes']);
	}

	public function addAttributes(Serializing $event) {
		$event->attributes['therealsujitk-gifs.giphy_api_key'] = $this->settings->get('therealsujitk-gifs.giphy_api_key');
	}
}
