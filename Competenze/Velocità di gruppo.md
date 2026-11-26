---
tipo: competenza
area: fisica
corsi: [Fisica 2]
livello: [triennale]
aliases: ["group velocity", "velocità di fase e velocità di gruppo", "vg = dω/dk", "pacchetto d'onda", "wave packet", "battimenti", "modulazione di ampiezza"]
tags: [competenza, area/fisica]
---

# Velocità di gruppo

> Velocità $v_g=d\omega/dk$ con cui trasla l'inviluppo (il baricentro) di un segnale non sinusoidale; in un mezzo dispersivo è diversa dalla velocità di fase $\omega/k$ e trasporta segnale ed energia.

## Definizione / enunciato
La velocità di fase $v=\omega/k$ è quella di un'onda armonica continua (una sola frequenza). Un segnale di forma qualsiasi $f(x)$, o un impulso (pacchetto d'onda), contiene molte frequenze: si scrive come integrale di Fourier. Nel vuoto tutte le componenti hanno la stessa velocità e il segnale non cambia forma. In un mezzo con dispersione, $v=c/n(\omega)$, ogni componente viaggia con velocità propria e il segnale si deforma propagandosi: si definisce allora la **velocità di gruppo** come velocità del baricentro del segnale.

## Formule chiave
$$f(x,t)=\int_{-\infty}^{\infty}A(k)\sin[k\cdot x-\omega(k)\cdot t]\,dk$$
Due onde di uguale ampiezza e frequenze vicine $\omega$, $\omega'$:
$$f(x,t)=A\sin[kx-\omega t]+A\sin[k'x-\omega't]=2A\cos\tfrac12[(k'-k)x-(\omega'-\omega)t]\ \sin\tfrac12[(k'+k)x-(\omega'+\omega)t]$$
$$\approx 2A\cos\tfrac12[(k'-k)x-(\omega'-\omega)t]\ \sin(kx-\omega t),\qquad v_g=\frac{\omega'-\omega}{k'-k}=\frac{d\omega}{dk}$$

## Intuizione
La somma di due armoniche vicine è un'onda portante modulata in ampiezza: l'inviluppo $2A\cos\frac12[\dots]$ (modulazione di ampiezza, battimenti) si muove con $v_g$, mentre le creste interne si muovono con la velocità di fase. Ogni massimo dell'inviluppo si propaga con $v_g$: è la velocità con cui si trasmette un segnale e si propaga la sua energia. Senza dispersione $v_g$ coincide con la velocità di fase.

## Come si usa
Data la relazione di dispersione $\omega(k)$ (o $n(\omega)$) si calcola $v_g=d\omega/dk$ e la si confronta con $\omega/k$. Per due frequenze discrete si usa il rapporto $\Delta\omega/\Delta k$.

## Nei corsi
- **Fisica 2** (triennale): fine della lezione opzionale 33b, come conseguenza della dispersione delle onde e.m. piane in un mezzo. Fonti: `triennale/ANNO 2/fisica 2/lezioni/33b_OPZIONALE. LEZIONE.pdf` (pp. 33-37).

## Prerequisiti
- [[Indice di rifrazione]]: in un mezzo dispersivo v dipende da ω
- [[Equazione delle onde]]: velocità di fase ω/k delle componenti armoniche

## Porta a
- Nessuno.

## Collegati
- [[Serie di Fourier]]: un segnale si scompone in componenti armoniche
