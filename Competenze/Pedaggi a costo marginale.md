---
tipo: competenza
area: ottimizzazione
corsi: [Dinamiche su network]
livello: [magistrale]
aliases: ["marginal cost tolls", "toll design", "pedaggi ottimi", "optimal tolls", "tolling", "internalizzazione delle esternalità", "Wardrop con pedaggi"]
tags: [competenza, area/ottimizzazione]
---

# Pedaggi a costo marginale

> Pedaggi sugli archi pari all'esternalità $f^*_e\tau'_e(f^*_e)$ calcolata all'ottimo di sistema: con essi l'equilibrio di Wardrop coincide con l'ottimo, e il prezzo dell'anarchia vale 1.

## Definizione / enunciato
Vettore di pedaggi $\omega=(\omega_e)$; costo percepito sull'arco $\omega_e+\tau_e(f_e)$. L'**equilibrio di Wardrop con pedaggi** $f^{(\omega)}=Az$ richiede che ogni cammino usato abbia costo percepito totale minimo:
$$z_\gamma>0\Rightarrow\sum_eA_{e\gamma}\big(\tau_e(f^{(\omega)}_e)+\omega_e\big)\le\sum_eA_{e\tilde\gamma}\big(\tau_e(f^{(\omega)}_e)+\omega_e\big)\ \ \forall\tilde\gamma .$$
**Teorema.** Con $\tau_e$ non decrescenti e $f_e\tau_e(f_e)$ convesse,
$$f^{(\omega)}=\arg\min_{f\ge0,\ Bf=\upsilon(\delta^{(o)}-\delta^{(d)})}\sum_e\Big(\int_0^{f_e}\tau_e(s)\,ds+\omega_ef_e\Big).$$
**Corollario.** Con i pedaggi a costo marginale $\omega^*_e=f^*_e\,\tau'_e(f^*_e)$, dove $f^*$ è l'ottimo di sistema, si ha $f^{(\omega^*)}=f^*$.

## Formule chiave
Le condizioni di ottimo del SO-TAP usano il costo marginale $\frac{d}{df}(f\tau_e(f))=\tau_e(f)+f\tau'_e(f)$; quelle del Wardrop con pedaggi usano $\tau_e(f)+\omega_e$. Imporre $\omega_e=f^*_e\tau'_e(f^*_e)$ le rende identiche in $f^*$.

## Intuizione
$f\tau'_e(f)$ è il ritardo in più che un guidatore aggiuntivo impone a tutti gli altri sull'arco. Farglielo pagare "internalizza l'esternalità negativa": la scelta egoista diventa quella socialmente ottima.

## Come si usa
Esempio di Braess delle slide: pedaggi $\omega^*_1=\omega^*_5=1/2$, $\omega^*_2=\omega^*_3=\omega^*_4=0$; l'equilibrio con pedaggi è $(0.5,0.5,0,0.5,0.5)$, uguale all'ottimo sociale. Esistono altri pedaggi ottimi, ad esempio $\omega=(0,0,\beta,0,0)$ con $\beta\ge1/2$, che scoraggia l'arco di Braess.

## Nei corsi
- **Dinamiche su network** (magistrale): Slides 4, "Toll design". Fonti: `magistrale/Dinamiche su network/slide/Slides-4-NetworkFlowOptimization.pdf` (pp. 30-32).

## Prerequisiti
- [[Equilibrio di Wardrop]]: l'equilibrio da correggere
- [[Prezzo dell'anarchia]]: ottimo di sistema e inefficienza

## Porta a
- Nessuna competenza del corso dipende direttamente da questa.

## Collegati
- [[Prezzo ombra]]: anche il pedaggio è un prezzo che fa coincidere scelte decentrate e ottimo
