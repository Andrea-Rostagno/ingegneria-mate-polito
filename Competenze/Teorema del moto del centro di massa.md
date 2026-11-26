---
tipo: competenza
area: fisica
corsi: [Fisica 1, Meccanica]
livello: [triennale]
aliases: ["center of mass theorem", "prima equazione cardinale", "I equazione cardinale della dinamica", "forze interne ed esterne", "quantità di moto totale"]
tags: [competenza, area/fisica]
---

# Teorema del moto del centro di massa

> Il centro di massa di un sistema si muove come un punto materiale con tutta la massa del sistema, soggetto alla sola risultante delle forze esterne.

## Definizione / enunciato
Su ogni punto agiscono forze esterne (interazione con il resto dell'universo) e forze interne (scambiate tra i punti). Per il terzo principio le forze interne sono uguali e opposte a coppie, quindi la loro risultante totale è nulla. Derivando $\vec P=m\vec v_{CM}$:
$$\vec R^{(E)}=m\,\vec a_{CM}=\frac{d\vec P}{dt}.$$
Le forze interne non possono modificare il moto del centro di massa.

## Formule chiave
$$\vec P=\sum_i m_i\vec v_i=m\vec v_{CM},\qquad \vec R^{(E)}=m\vec a_{CM}$$

## Intuizione
Un proiettile che esplode in volo: i frammenti si sparpagliano per forze interne, ma il loro CM continua sulla parabola.

## Come si usa
Esempio (pp. 7-10): due blocchi con attrito tra loro, spinti da una forza $F$. L'attrito tra i blocchi è interno, $F$ è esterna; per $m_1$ l'attrito è resistente, per $m_2$ è motore.

## Nei corsi
- **Fisica 1** (triennale): lezione del 4/04/2022. Fonte: `triennale/ANNO 1/fisica 1/Slide e materiale dei corsi/Materiale corso Bufalino 2022/Dinamica_Sistemi_di_punti/Dinamica_Sistemi_Lezione1.pdf` (pp. 4-25).
- **Meccanica** (triennale): con $\vec Q=\sum_im_i\vec v_i=m\vec v_G$ (Thm 7.1), la prima equazione della dinamica è $\vec R^{(e)}=\dot{\vec Q}$ (7.38); Thm 7.5 dà $m\vec a_G=\vec R^{(e)}$ (7.43). Esempio Lect6 Ex1 (due masse con molle su una guida liscia): $m\ddot x_G=-k_1x_1-k_2x_2$ è un'equazione chiusa in $x_G$ solo se $k_1m_2=k_2m_1$. Fonti: `triennale/ANNO 2/Meccanica/Lect6-Dynamics.pdf` (pp. 68, 71-73, numerazione stampata); `triennale/ANNO 2/Meccanica/MeccRazLezioni.pdf` ("Equazioni cardinali della dinamica", pp. 94-106).

## Prerequisiti
- [[Centro di massa]]: si deriva due volte la sua posizione
- [[Leggi di Newton]]: le forze interne si annullano a coppie

## Porta a
- [[Conservazione della quantità di moto]]: con risultante esterna nulla

## Collegati
- Nessuno.
