---
tipo: competenza
area: fisica
corsi: [Fisica 2]
livello: [triennale]
aliases: ["two-source interference", "onde coerenti", "coherent waves", "esperimento di Young", "interferenza costruttiva e distruttiva", "differenza di cammino ottico", "intensità media"]
tags: [competenza, area/fisica]
---

# Interferenza da due sorgenti

> Due onde coerenti che si sommano in un punto danno un'intensità media che dipende dalla loro differenza di fase: massima se la differenza di cammino è un multiplo di $\lambda$, nulla se è un multiplo dispari di $\lambda/2$.

## Definizione / enunciato
Due sorgenti (dipoli oscillanti) emettono onde che si incontrano in P. Se hanno stessa ampiezza massima, campi $\vec E$ paralleli, stessa frequenza e differenza di fase $\varphi$ costante alla sorgente, le onde sono dette **coerenti**. In P i campi si sommano (somma vettoriale, scalare se paralleli); ciò che si misura (o si vede, per la luce) è l'**intensità media** $I_M$, media sul periodo della densità di energia $w=\varepsilon_0E^2$.
**Esperimento di Young:** luce monocromatica, una fenditura e poi una doppia fenditura $S_1$, $S_2$ a distanza $a$; su uno schermo lontano (distanza $D$) compaiono frange chiare e scure.

## Formule chiave
$$\Phi=(kr_2-\omega t+\varphi)-(kr_1-\omega t)=kr_2-kr_1+\varphi,\qquad E_R=2E_0\cos\frac\Phi2$$
$$I=\langle w\rangle=\frac1T\int_0^T\varepsilon_0E^2(P,t)dt=2\varepsilon_0E_0^2\cos^2\frac\Phi2,\qquad I_M\propto\left(2E_0\cos\frac\phi2\right)^2$$
Sorgenti con fase iniziale nulla e schermo lontano ($r_1$, $r_2$ quasi paralleli):
$$\phi=k(r_1-r_2)\approx k(a\sin\theta)=\frac{2\pi}{\lambda}(a\sin\theta),\qquad I_M\propto\left(2E_0\cos\frac{\pi a\sin\theta}{\lambda}\right)^2$$
$$I_M\ \text{max}:\ r_1-r_2\approx a\sin\theta=m\lambda;\qquad I_M=0:\ r_1-r_2\approx a\sin\theta=(2m+1)\frac\lambda2,\qquad m=0,\pm1,\pm2,\dots$$

## Intuizione
La media di $\sin^2$ sul periodo vale $1/2$: resta solo il fattore $\cos^2(\phi/2)$, che dipende dalla posizione tramite la differenza di cammino ottico. Interferenza costruttiva se la differenza di cammino è un multiplo intero della lunghezza d'onda, distruttiva se è un multiplo dispari di semilunghezze d'onda. Senza coerenza la fase relativa cambia a caso e le frange spariscono.

## Come si usa
Si scrive la differenza di cammino $a\sin\theta$, si ricava la fase $\phi$ e si impongono le condizioni di massimo e minimo; per angoli piccoli si trova la posizione delle frange sullo schermo. Le frange sono equispaziate in $a\sin\theta/\lambda$ (grafico di $I$ a p. 43).

## Nei corsi
- **Fisica 2** (triennale): onde coerenti da dipoli oscillanti, somma con i fasori, intensità media, esperimento di Young. Fonti: `triennale/ANNO 2/fisica 2/lezioni/37&38. LEZIONE.pdf` (pp. 30-43).

## Prerequisiti
- [[Metodo dei fasori]]: somma dei campi con differenza di fase φ
- [[Vettore di Poynting]]: l'intensità è la media temporale dell'energia

## Porta a
- [[Interferenza da N sorgenti]]: generalizzazione da 2 a N sorgenti coerenti
- [[Legge di Bragg]]: differenza di fase tra raggi riflessi da piani adiacenti
- [[Ampiezza di probabilità]]: la figura di interferenza degli elettroni

## Collegati
- Nessuno.
