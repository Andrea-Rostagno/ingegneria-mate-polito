---
tipo: competenza
area: fisica
corsi: [Fisica 2]
livello: [triennale]
aliases: ["Lorentz force", "forza magnetica su una carica in moto", "F = qv × B", "tesla", "moto ciclotronico", "frequenza ciclotronica", "cyclotron frequency", "moto elicoidale"]
tags: [competenza, area/fisica]
---

# Forza di Lorentz

> Forza che un campo magnetico esercita su una carica in moto, $\vec F=q\vec v\times\vec B$: sempre perpendicolare alla velocità, curva la traiettoria senza compiere lavoro.

## Definizione / enunciato
Sperimentalmente: una carica in quiete in un campo magnetico non subisce forza; una carica con velocità $\vec v$ in un campo $\vec B$ subisce una forza di modulo proporzionale alla carica e alla componente della velocità perpendicolare al campo, di direzione perpendicolare al piano di $\vec v$ e $\vec B$, di verso dato dalla regola della mano destra (opposto per $q$ negativa). La relazione definisce l'unità di $B$, il tesla.
Poiché $\vec F\perp\vec v$, la potenza è nulla: il campo magnetico non compie lavoro, non cambia l'energia cinetica né il modulo di $v$, solo la direzione.
**Moto in campo uniforme:** (1) con $\vec v\perp\vec B$ moto circolare uniforme; (2) con $\vec v$ obliqua, la componente parallela al campo non cambia e quella perpendicolare ruota: il moto è un'**elica**.
**Sovrapposizione:** con più sorgenti la forza totale è la somma delle $q\vec v\times\vec B_i$.

## Formule chiave
$$\vec F=q\vec v\times\vec B,\qquad F=qvB\sin\alpha,\qquad [B]=\frac{Ns}{Cm}=\text{Tesla},\qquad \vec F\cdot\vec v=\text{potenza}=0$$
$$\frac{v^2}{r}=\frac Fm=\frac{qvB}{m},\qquad r=\frac{mv}{qB},\qquad \omega=\frac vr=\frac qmB\ \text{(frequenza ciclotronica)}$$
$$\sum_i\vec F_i=\sum_iq\vec v\times\vec B_i=q\vec v\times\sum_i\vec B_i$$
(Nella slide di p. 20 l'ultimo membro è scritto $=\vec v\times\vec B$ senza $q$: refuso.)

## Intuizione
La forza fa da forza centripeta: la carica gira attorno alle linee di campo con frequenza che non dipende dalla velocità, ma solo da $q/m$ e da $B$. Le particelle veloci descrivono cerchi più grandi nello stesso tempo.

## Come si usa
Dato $\vec B$ uniforme e la velocità iniziale, si scompone $\vec v$ lungo e perpendicolarmente a $\vec B$, si ricavano raggio $r=mv/qB$ e frequenza $\omega=qB/m$ e si descrive l'elica. La stessa forza, sommata sulle cariche di un filo, dà la forza su una corrente. Il campo magnetico terrestre è dell'ordine di $10^{-5}$ T.

## Nei corsi
- **Fisica 2** (triennale): lezione 14, "Forza magnetica su una carica in moto" (le slide 7-11 sono ripetute alle 12-16). Fonti: `triennale/ANNO 2/fisica 2/lezioni/14. LEZIONE.pdf` (pp. 7-20).

## Prerequisiti
- [[Prodotto vettoriale]]: F = qv × B
- [[Moto circolare]]: con v perpendicolare a B il moto è circolare uniforme

## Porta a
- [[Forza magnetica su una corrente]]: somma delle forze qv × B sulle cariche del filo
- [[Proprietà magnetiche della materia]]: diamagnetismo dalla frequenza ciclotronica indotta
- [[Pressione di radiazione]]: la forza magnetica -ev × B spinge gli elettroni del bersaglio

## Collegati
- [[Forza centripeta]]: qvB fornisce l'accelerazione centripeta, r = mv/qB
