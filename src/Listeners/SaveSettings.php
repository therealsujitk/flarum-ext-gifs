<?php

namespace Therealsujitk\GIFs\Listeners;

use Flarum\Api\Serializer\ForumSerializer;
use Flarum\Api\Event\Serializing;
use Flarum\Settings\SettingsRepositoryInterface;
use Illuminate\Contracts\Events\Dispatcher;

class SaveSettings
{
    public function subscribe(Dispatcher $events)
    {
        $events->listen(Serializing::class, [$this, 'addAttributes']);
    }

    public function addAttributes(Serializing $event)
    {
        if ($event->isSerializer(ForumSerializer::class)) {
            $settings = app(SettingsRepositoryInterface::class);

            $event->attributes['therealsujitk-gifs.giphy_api_key'] = $settings->get('therealsujitk-gifs.giphy_api_key');
        }
    }
}
