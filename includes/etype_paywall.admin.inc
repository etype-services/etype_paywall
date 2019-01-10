<?php

function etype_paywall_admin() {

    $form = [];

    $form['etype_paywall_limit'] = [
        '#type' => 'select',
        '#title' => t("Limit"),
        '#description' => t("Number of articles allowed."),
        '#options' => [
            4 => 4,
            8 => 8,
            10 => 10,
        ],
        '#default_value' => variable_get('etype_paywall_limit', 4),
    ];

    $form['etype_paywall_duration'] = [
        '#type' => 'select',
        '#title' => t("Cookie Duration"),
        '#description' => t("Number of days until cookie expires."),
        '#options' => [
            7 => 7,
            14 => 14,
            30 => 30,
            60 => 60,
        ],
        '#default_value' => variable_get('etype_paywall_duration', 4),
    ];

    $form['etype_paywall_block_content'] = [
        '#type' => 'text_format',
        '#title' => t('Paywall Block Content'),
        '#size' => 55,
        '#default_value' => variable_get('etype_paywall_block_content', '')['value'],
        '#format' => 'full_html'
    ];

    $form['etype_paywall_info_block_content'] = [
        '#type' => 'text_format',
        '#title' => t('Paywall Info Block Content'),
        '#description' => t("#number and #limit will be replaced with correct values."),
        '#size' => 55,
        '#default_value' => variable_get('etype_paywall_info_block_content', '')['value'],
        '#format' => 'full_html'
    ];

    return system_settings_form($form);
}