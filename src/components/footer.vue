<script setup>
import { t } from '../i18n.js'
</script>

<template>
    <footer class="bg-green-800 text-white px-8 py-10 mt-10">
        <div class="flex flex-wrap justify-between gap-8">
            <div>
                <h3 class="text-yellow-300 font-bold text-lg mb-3">{{ t('footerBrand') }}</h3>
                <p class="text -sm text-green-200">{{ t('footerDesc') }}</p>
            </div>
    
        <!..Quick Links..>
        <div>
            <h3 class="text-yellow-300 font-bold text-lg mb-3">{{ t('quickLinks') }}</h3>
            <ul class="space-y-2 text-sm">
                <li>
                <RouterLink to="/home" class="hover:text-yellow-300 text-white font-bold text-lg mb-3">{{ t('home') }}</RouterLink >
                </li>
                 <li>
                <RouterLink to="/about" class="hover:text-yellow-300 text-white font-bold text-lg mb-3">{{ t('about') }}</RouterLink >
                </li>
                 <li>
                <RouterLink to="/contact" class="hover:text-yellow-300 text-white font-bold text-lg mb-3">{{ t('contact') }}</RouterLink >
                </li>
                 <li>
                <RouterLink to="/services" class="hover:text-yellow-300 text-white font-bold text-lg mb-3">{{ t('services') }}</RouterLink >
                </li>
                </ul>
                </div>
            
                
        
                    <!..Destinations>
                    <div>
                    <h3 class="text-yellow-300 font-bold text-lg mb-3">{{ t('destinations') }}</h3>
                    <ul class="space-y-2 text-sm">
                        <li>
                            <RouterLink to="/northern" class="hover:hg-yellow-300 text-white font-bold text-lg mb-3">{{ t('northern') }}</RouterLink>
                        </li>
                         <li>
                            <RouterLink to="/kigali" class="hover:hg-yellow-300 text-white font-bold text-lg mb-3">{{ t('kigali') }}</RouterLink>
                        </li>
                         <li>
                            <RouterLink to="/eastern" class="hover:hg-yellow-300 text-white font-bold text-lg mb-3">{{ t('eastern') }}</RouterLink>
                        </li>
                         <li>
                            <RouterLink to="/southern" class="hover:hg-yellow-300 text-white font-bold text-lg mb-3">{{ t('southern') }}</RouterLink>
                        </li>
                         <li>
                            <RouterLink to="/western" class="hover:hg-yellow-300 text-white font-bold text-lg mb-3">{{ t('western') }}</RouterLink>
                        </li>
                    </ul>
                    </div>
                    
                     <!..Contact>
                    <div>
                    <h3 class="text-yellow-300 font-bold text-lg mb-3">{{ t('contactUs') }}</h3>
                    <ul class="space-y-2 text-sm">
                        <li>
                            <span class="text-white font-bold text-lg mb-3">{{ t('number') }}</span>
                        </li>
                         <li>
                            <span class="text-white font-bold text-lg mb-3">{{ t('email') }}</span>
                        </li>
                         <li>
                            <span class="text-white font-bold text-lg mb-3">{{ t('address') }}</span>
                        </li>
                     </ul>   
</div>
                </div>
                <!..place for copyright>
                <div class="border-t border-green-600 mt-8 pt-4 text-center text-sm text-green-200 justify center">
                    {{ t('copyright') }}
                </div>
            
    </footer>
    </template>